import React from "react";

import { Comment } from "./Comments";
import { PrimeiroComponent } from "./PrimeiroComponent";
import { WelcomeWithClass } from "./WelcomeWithClass";
import { WelcomeWithFunction } from "./WelcomeWithFunction";

import Header from "../../utils-components/Header";

export let autorMock = {
    name: 'james',
    nameAlt: 'Avatar da pessoa',
    avatarUrl: 'https://www.shutterstock.com/image-vector/young-smiling-man-adam-avatar-600w-2107967969.jpg',
};

export default function AllComponentesProps() {
    return (<>
        <Header title="Comments.js" />
        <Comment
            author={autorMock}
            date='2023'
            text='algumm texto aqui asdf'
        />

        <Header title="PrimeiroComponent.js" />
        <PrimeiroComponent name="meuNome" />

        <Header title="WelcomeWithClass.js" />
        <WelcomeWithClass description="AlgumaDescrição" name="AlgumNome" />

        <Header title="WelcomeWithFunction.js" />
        <WelcomeWithFunction description="AlgumaDescrição" name="AlgumNome" />
    </>)
}