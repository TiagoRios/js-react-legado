import React from "react";

import Titulo from "../../utils-components/Titulo";

import { Comment, autor111 } from "./Comments";
import { PrimeiroComponent } from "./PrimeiroComponent";

import { WelcomeWithClass } from "./WelcomeWithClass";
import { WelcomeWithFunction } from "./WelcomeWithFunction";

export default function AllComponentesProps() {
    return (
        <>
            <Titulo title="Comments.js"
                component={<Comment author={autor111} text='algumm texto aqui asdf' date='2023' />} />

            <Titulo title="PrimeiroComponent.js"
                component={<PrimeiroComponent name="meuNome" />} />

            <Titulo title="WelcomeWithClass.js"
                component={<WelcomeWithClass name="AlgumNome" description="AlgumaDescrição" />} />

            <Titulo title="WelcomeWithFunction.js"
                component={<WelcomeWithFunction name="AlgumNome" description="AlgumaDescrição" />} />
        </>
    )
}