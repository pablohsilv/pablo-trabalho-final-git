
document.addEventListener("DOMContentLoaded", () => {
    /*
     * ==========================================
     * FLUENT 360
     * Interações da Landing Page
     * ==========================================
     */

    const botoes = document.querySelectorAll("button");
    const secoes = document.querySelectorAll("section");
    const faq = secoes[7];

    /* ==========================================
       1. ROLAGEM DOS BOTÕES CTA
       ========================================== */

    const botoesCTA = Array.from(botoes);

    botoesCTA.forEach((botao) => {
        botao.addEventListener("click", () => {
            const texto = botao.textContent.toLowerCase();

            if (
                texto.includes("vaga") ||
                texto.includes("inscrever") ||
                texto.includes("agora")
            ) {
                const investimento = secoes[5];

                investimento?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                mostrarFeedback(
                    "Você está sendo direcionado para a área de inscrição."
                );
            }
        });
    });


    /* ==========================================
       2. FAQ INTERATIVO
       ========================================== */

    if (faq) {
        const perguntas = faq.querySelectorAll("article");

        perguntas.forEach((item) => {
            const titulo = item.querySelector("h3");
            const resposta = item.querySelector("p");

            if (!titulo || !resposta) return;

            resposta.style.display = "none";
            titulo.style.cursor = "pointer";
            titulo.setAttribute("aria-expanded", "false");

            titulo.addEventListener("click", () => {
                const aberto = resposta.style.display !== "none";

                // Fecha todas as outras respostas
                perguntas.forEach((outroItem) => {
                    const outroTitulo = outroItem.querySelector("h3");
                    const outraResposta = outroItem.querySelector("p");

                    if (outroTitulo && outraResposta) {
                        outraResposta.style.display = "none";
                        outroTitulo.setAttribute("aria-expanded", "false");
                    }
                });

                // Abre a selecionada
                if (!aberto) {
                    resposta.style.display = "block";
                    titulo.setAttribute("aria-expanded", "true");
                }
            });
        });
    }


    /* ==========================================
       3. ANIMAÇÃO DAS SEÇÕES
       ========================================== */

    const observador = new IntersectionObserver(
        (entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visivel");
                    observador.unobserve(entrada.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    secoes.forEach((secao) => {
        secao.classList.add("animacao-scroll");
        observador.observe(secao);
    });


    /* ==========================================
       4. CONTADOR DE OFERTA
       ========================================== */

    const contador = criarContador();

    if (contador) {
        const areaUrgencia = secoes[5]?.querySelector("aside:last-of-type");

        if (areaUrgencia) {
            areaUrgencia.appendChild(contador);
        }
    }


    /* ==========================================
       5. MODAL DE INSCRIÇÃO
       ========================================== */

    botoesCTA.forEach((botao) => {
        botao.addEventListener("click", () => {
            const texto = botao.textContent.toLowerCase();

            if (
                texto.includes("garantir minha vaga") ||
                texto.includes("garantir minha vaga agora")
            ) {
                abrirModal();
            }
        });
    });


    /* ==========================================
       6. LINKS DO RODAPÉ
       ========================================== */

    const linksRodape = document.querySelectorAll("footer a");

    linksRodape.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();

            const nome = link.textContent.trim();

            mostrarFeedback(
                `${nome}: conteúdo demonstrativo da página.`
            );
        });
    });


    /* ==========================================
       7. VÍDEO / PLACEHOLDER
       ========================================== */

    const hero = secoes[0];

    if (hero) {
        const videoArea = hero.querySelector("div");

        if (videoArea) {
            videoArea.style.cursor = "pointer";

            videoArea.addEventListener("click", () => {
                videoArea.innerHTML = `
                    <div style="
                        text-align: center;
                        padding: 30px;
                    ">
                        <div style="
                            font-size: 42px;
                            margin-bottom: 12px;
                        ">
                            ▶
                        </div>

                        <p style="
                            margin: 0;
                            font-weight: 600;
                        ">
                            Vídeo de apresentação
                        </p>

                        <small>
                            Área preparada para receber seu vídeo.
                        </small>
                    </div>
                `;

                mostrarFeedback(
                    "Adicione aqui o vídeo oficial do Fluent 360."
                );
            });
        }
    }


    /* ==========================================
       8. BOTÃO VOLTAR AO TOPO
       ========================================== */

    const voltarTopo = document.createElement("button");

    voltarTopo.type = "button";
    voltarTopo.textContent = "↑";
    voltarTopo.setAttribute("aria-label", "Voltar ao topo");

    Object.assign(voltarTopo.style, {
        position: "fixed",
        right: "24px",
        bottom: "24px",
        width: "46px",
        height: "46px",
        padding: "0",
        borderRadius: "50%",
        display: "none",
        zIndex: "999",
        fontSize: "20px"
    });

    document.body.appendChild(voltarTopo);

    window.addEventListener("scroll", () => {
        voltarTopo.style.display =
            window.scrollY > 500 ? "block" : "none";
    });

    voltarTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    /* ==========================================
       FUNÇÕES AUXILIARES
       ========================================== */

    function mostrarFeedback(mensagem) {
        let feedback = document.querySelector(".feedback-site");

        if (!feedback) {
            feedback = document.createElement("div");
            feedback.className = "feedback-site";

            Object.assign(feedback.style, {
                position: "fixed",
                left: "50%",
                bottom: "25px",
                transform: "translateX(-50%) translateY(20px)",
                background: "#1a252f",
                color: "#fff",
                padding: "14px 22px",
                borderRadius: "8px",
                fontSize: "14px",
                boxShadow: "0 10px 30px rgba(0,0,0,.15)",
                zIndex: "2000",
                opacity: "0",
                transition: "all .3s ease",
                maxWidth: "90%",
                textAlign: "center"
            });

            document.body.appendChild(feedback);
        }

        feedback.textContent = mensagem;

        requestAnimationFrame(() => {
            feedback.style.opacity = "1";
            feedback.style.transform =
                "translateX(-50%) translateY(0)";
        });

        clearTimeout(feedback.timer);

        feedback.timer = setTimeout(() => {
            feedback.style.opacity = "0";
            feedback.style.transform =
                "translateX(-50%) translateY(20px)";
        }, 3500);
    }


    function criarContador() {
        const elemento = document.createElement("div");

        elemento.style.marginTop = "16px";
        elemento.style.fontWeight = "700";
        elemento.style.fontSize = "1rem";

        // 30 dias a partir da primeira visita
        let prazo = localStorage.getItem("fluent360_oferta");

        if (!prazo) {
            prazo = Date.now() + 30 * 24 * 60 * 60 * 1000;
            localStorage.setItem(
                "fluent360_oferta",
                prazo
            );
        }

        function atualizar() {
            const restante = Number(prazo) - Date.now();

            if (restante <= 0) {
                elemento.textContent =
                    "Oferta encerrada.";
                return;
            }

            const dias = Math.floor(
                restante / (1000 * 60 * 60 * 24)
            );

            const horas = Math.floor(
                (restante / (1000 * 60 * 60)) % 24
            );

            const minutos = Math.floor(
                (restante / (1000 * 60)) % 60
            );

            const segundos = Math.floor(
                (restante / 1000) % 60
            );

            elemento.textContent =
                `Tempo restante: ${dias}d ${horas}h ${minutos}min ${segundos}s`;
        }

        atualizar();
        setInterval(atualizar, 1000);

        return elemento;
    }


    function abrirModal() {
        if (document.querySelector(".modal-inscricao")) return;

        const modal = document.createElement("div");

        modal.className = "modal-inscricao";

        modal.innerHTML = `
            <div class="modal-conteudo">

                <button
                    class="modal-fechar"
                    type="button"
                    aria-label="Fechar"
                >
                    ×
                </button>

                <h2>Comece sua inscrição</h2>

                <p>
                    Preencha seus dados para continuar.
                </p>

                <form class="form-inscricao">

                    <label>
                        Nome
                        <input
                            type="text"
                            name="nome"
                            placeholder="Seu nome"
                            required
                        >
                    </label>

                    <label>
                        E-mail
                        <input
                            type="email"
                            name="email"
                            placeholder="seu@email.com"
                            required
                        >
                    </label>

                    <button type="submit">
                        Continuar inscrição
                    </button>

                </form>
            </div>
        `;

        document.body.appendChild(modal);

        requestAnimationFrame(() => {
            modal.classList.add("ativo");
        });

        const fechar = modal.querySelector(".modal-fechar");

        fechar.addEventListener("click", () => {
            fecharModal(modal);
        });

        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                fecharModal(modal);
            }
        });

        const formulario = modal.querySelector(".form-inscricao");

        formulario.addEventListener("submit", (event) => {
            event.preventDefault();

            const nome = formulario.nome.value.trim();
            const email = formulario.email.value.trim();

            if (!nome || !email) return;

            modal.querySelector(".modal-conteudo").innerHTML = `
                <button
                    class="modal-fechar"
                    type="button"
                    aria-label="Fechar"
                >
                    ×
                </button>

                <div style="text-align:center">

                    <div style="
                        font-size:48px;
                        margin-bottom:15px;
                    ">
                        ✓
                    </div>

                    <h2>Cadastro iniciado</h2>

                    <p>
                        Obrigado, ${escaparHTML(nome)}.
                    </p>

                    <p>
                        Enviamos as próximas instruções
                        para <strong>${escaparHTML(email)}</strong>.
                    </p>

                </div>
            `;

            modal
                .querySelector(".modal-fechar")
                .addEventListener("click", () => {
                    fecharModal(modal);
                });
        });
    }


    function fecharModal(modal) {
        modal.classList.remove("ativo");

        setTimeout(() => {
            modal.remove();
        }, 250);
    }


    function escaparHTML(valor) {
        const div = document.createElement("div");
        div.textContent = valor;
        return div.innerHTML;
    }
});
