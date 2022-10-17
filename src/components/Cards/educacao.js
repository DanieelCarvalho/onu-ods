import React from "react";
import * as S from "./style"

import Educabg from "./img/educabg.png"

export default function Education() {
    return (
        <S.Container>
            <S.Link href="https://www.novaiguacu.rj.gov.br/semed/2022/09/23/alunos-da-rede-municipal-de-nova-iguacu-aprendem-sobre-preservacao-ambiental-em-exposicao-itinerante-sobre-o-ciclo-da-agua-2/" target="_blank" title="Educação de qualidade" >
            <S.ImgODS src={Educabg} alt="um desenho de um livro e uma caneta aberta"/>
            </S.Link>
          
         

        </S.Container>
    )
}