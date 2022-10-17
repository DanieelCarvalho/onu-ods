import React from "react";
import * as S from "./style"
import Clima from "./img/clima.jpg"

export default function Fome() {
    return (
        <S.Container>
            <S.Link href="https://www.novaiguacu.rj.gov.br/2022/09/21/area-de-protecao-ambiental-de-nova-iguacu-ganha-125-novas-mudas-de-arvores-nativas-da-mata-atlantica-2/" target="_blank" title="Ação climática">
                <S.ImgODS src={Clima} alt="ação climática"/>
            </S.Link>    

        </S.Container>
    )
}