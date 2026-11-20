const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const params = new URLSearchParams(window.location.search);
const tipoSelecionado = params.get("tipo");
const tipoSite = document.querySelector("#tipo-site");

if (tipoSelecionado && tipoSite) {
  const opcao = [...tipoSite.options].find(
    (item) => item.value === tipoSelecionado
  );

  if (opcao) {
    tipoSite.value = tipoSelecionado;
  }
}

const whatsappQuestions = document.querySelector("#whatsapp-questions");

if (whatsappQuestions) {
  const mensagem = encodeURIComponent(
    "Olá, Miguel! Quero fazer um site com a Shyxzz Sites."
  );
  whatsappQuestions.href =
    `https://wa.me/5524981300648?text=${mensagem}`;
}

const projectForm = document.querySelector("#project-form");

if (projectForm) {
  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(projectForm);
    const recursos = data.getAll("recursos");

    const mensagem = [
      "*NOVA SOLICITAÇÃO — SHYXZZ SITES*",
      "",
      `*Nome:* ${data.get("nome")}`,
      `*WhatsApp:* ${data.get("whatsapp")}`,
      `*Empresa/loja:* ${data.get("empresa") || "Não informado"}`,
      `*Tipo de site:* ${data.get("tipo")}`,
      `*Prazo desejado:* ${data.get("prazo")}`,
      `*Orçamento:* ${data.get("orcamento")}`,
      `*Recursos:* ${
        recursos.length ? recursos.join(", ") : "Nenhum recurso específico"
      }`,
      "",
      "*Descrição do projeto:*",
      data.get("descricao")
    ].join("\n");

    const url =
      `https://wa.me/5524981300648?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  });
}