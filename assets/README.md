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

**Recomendações**
- JPG, ~2000px no lado maior, qualidade 80.
- O ponto focal fica no centro do crop (`background-position: center`).
- Nos balões (dobras 01, 04 e 08) a foto ganha cantos bem arredondados: deixe folga em
  volta do rosto para não perder nada no arredondamento.
- Na dobra 01 a base da foto recebe um escurecimento para a legenda "hi!" ficar legível —
  evite fotos com informação importante no canto inferior esquerdo.
- A dobra 06 recebe um véu azul-marinho por cima: escolha uma foto com área respirada à
  esquerda, onde entra o título.
