import React from "react";
import * as S from "./style"

import Vida from "./img/vidabg.png"

export default function Fome() {
    return (
        <S.Container>
            <S.Link href="https://aguasdorio.com.br/reservatorio-cabucu-baixo-em-nova-iguacu-inicia-operacao-plena-e-beneficia-60-mil-pessoas/" target="_blanck" title="Água potável e saneamento">

            <S.ImgODS src={Vida} alt="ods 14 vida na agua" />
                </S.Link>
        
        </S.Container>
    )
}