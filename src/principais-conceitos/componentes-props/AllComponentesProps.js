import React from "react";
import { Comment, autor111 } from "./Comments";
import { PrimeiroComponent } from "./PrimeiroComponent";

import { WelcomeWithClass } from "./WelcomeWithClass";
import { WelcomeWithFunction } from "./WelcomeWithFunction";

export class AllComponentesProps extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Componentes de principais conceitos</h1>
                <h2>Pasta componentes-props</h2>
     
                <h3>Componente Comments.js</h3>
                <Comment author={autor111} text='algumm texto aqui asdf' date='2023' />
                <hr/>

                <h3>Componente PrimeiroComponent.js</h3>
                <PrimeiroComponent name="meuNome"/>
                <hr/>

                <h3>Componente WelcomeWithClass.js</h3>
                <WelcomeWithClass name="AlgumNome" description="AlgumaDescrição"/>                
                <hr/>

                <h3>Componente WelcomeWithFunction.js</h3>
                <WelcomeWithFunction name="AlgumNome" description="AlgumaDescrição"/>                
                <hr/>
            </div>
        )
    }
}