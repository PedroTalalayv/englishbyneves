# Slots de fotografia

Coloque os arquivos nesta pasta com **exatamente estes nomes**. Nenhum ajuste de CSS é
necessário — o slot troca sozinho e o monograma da chapa some. Enquanto o arquivo não
existir, aparece o duotone azul da marca (não quebra o layout).

| Arquivo                    | Dobra | Proporção | O que deve ser                                              |
|----------------------------|-------|-----------|-------------------------------------------------------------|
| `hero-retrato.jpg`         | 01    | 4:5       | Retrato vertical da Ester olhando para a câmera. É a foto principal — entra no balão de fala do topo, com a legenda "hi!" sobreposta na base |
| `sobre-ester.jpg`          | 04    | 4:5       | Segundo melhor retrato, mais espontâneo                     |
| `sobre-detalhe.jpg`        | 04    | 3:4       | Foto pequena de apoio: caderno, café, viagem, bastidor      |
| `experiencia-londres.jpg`  | 06    | 16:9      | Foto larga e forte de Londres/viagem — vira fundo full-bleed |
| `final-ester.jpg`          | 08    | 4:5       | Retrato de encerramento, expressão aberta                   |
| `insta-1.jpg` … `insta-6.jpg` | esteira | 4:5    | Seis fotos do Instagram para a esteira "A vida que cabe no inglês" — viagem, cotidiano, Londres, bastidor. São as que dão volume de vida real à página |

**Recomendações**
- JPG, ~2000px no lado maior, qualidade 80.
- O ponto focal fica no centro do crop (`background-position: center`).
- Nos balões (dobras 01, 04 e 08) a foto ganha cantos bem arredondados: deixe folga em
  volta do rosto para não perder nada no arredondamento.
- Na dobra 01 a base da foto recebe um escurecimento para a legenda "hi!" ficar legível —
  evite fotos com informação importante no canto inferior esquerdo.
- A dobra 06 recebe um véu azul-marinho por cima: escolha uma foto com área respirada à
  esquerda, onde entra o título.

**Sobre a esteira (`insta-1` a `insta-6`)**
- São as fotos mais fáceis de conseguir: servem recortes do feed dela.
- Variedade importa mais que qualidade individual — misture retrato, lugar, detalhe e
  cotidiano. É o trecho da página que mostra a vida por trás das aulas.
- Cada uma é exibida em 4:5 dentro de uma moldura clara. Fotos quadradas do Instagram
  funcionam: o corte tira um pouco de cima e de baixo.
- Se você tiver menos de seis, repita as melhores em posições distantes — a esteira roda
  em loop e ninguém percebe.
