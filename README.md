# Ester Neves — Landing page

Landing page de **Ester Neves**, professora de inglês online.
HTML, CSS e JavaScript puros — sem build, sem dependências, sem framework.

## Rodar localmente

Qualquer servidor estático serve. Sem nenhum instalado:

```bash
python -m http.server 5173
```

E abra <http://localhost:5173>.

Abrir o `index.html` direto pelo sistema de arquivos também funciona, mas um
servidor evita comportamento estranho em caminhos relativos.

## Publicar na Vercel

O projeto é estático e fica na raiz, então não há o que configurar:

1. Vercel → **Add New… → Project** → importe este repositório.
2. Framework Preset: **Other**.
3. Build Command: deixe **vazio**.
4. Output Directory: deixe **vazio** (a raiz já é o site).
5. Deploy.

Cada push na `main` republica sozinho.

## Fotografia

As fotos da Ester entram em `assets/` com nomes fixos — o CSS troca o slot
sozinho. Enquanto o arquivo não existe, aparece uma chapa azul da marca no
lugar, então a página nunca quebra por foto faltando.

Os nomes, proporções e o enquadramento esperado de cada um estão em
[`assets/README.md`](assets/README.md).

## Estrutura

```
index.html    → as 8 dobras
styles.css    → tokens de marca e de tema, componentes, responsivo
script.js     → tema claro/escuro, menu, revelação no scroll, brilho do cursor
assets/       → fotos (ver README de lá)
```

## Notas de design

**Assinatura: o balão de fala.** A promessa da Ester é conseguir *falar*, então
a página é construída de balões — as fotos, os depoimentos e a dobra 02, em que
as frases de quem trava no inglês viram uma conversa alternando de lado.

**Tipografia.** Bricolage Grotesque no display, DM Sans no corpo, Fraunces
itálica nas palavras de destaque. Carregadas do Google Fonts.

**Cor.** Creme e tinta azul como base, com quatro chapados alegres (céu, rosa,
sol, menta) e a framboesa `#C93A60` como acento. O tom do acento foi escolhido
por medição: o rosa pastel como texto dá 1,76:1 de contraste e reprova; a
framboesa dá 4,54:1 e passa até em texto pequeno.

**Tema claro/escuro.** Os tokens trabalham em dois papéis — cores de marca, que
nunca mudam, e cores de papel (superfície, texto, fio), que trocam no tema. A
página abre sempre no claro; o escuro é escolha do visitante e fica guardada no
navegador.

**Acessibilidade.** Contraste conferido nos dois temas, foco visível no teclado,
`prefers-reduced-motion` respeitado (desliga revelações, marquee, anéis girando
e o brilho do cursor).

## Pendências

- [ ] Colocar as fotos reais da Ester em `assets/`.
- [ ] Confirmar o link de WhatsApp e ligá-lo nos CTAs — hoje os botões
      "Quero começar", "Agendar uma aula" e a bolha de contato apontam para o
      Instagram.
