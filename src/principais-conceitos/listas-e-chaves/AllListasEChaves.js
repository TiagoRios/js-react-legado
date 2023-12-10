
import Blog from "./Blog";
import Header from "../../utils-components/Header";
import ListaClass from "./ListaClass";
import ListaFunction from "./ListaFunction";

import numerosMock from "./numeros";
import postsMock from "./posts";

export default function AllListasEChaves() {
    return (<>
        <Header title="ListaClass.js" />
        <ListaClass arr={numerosMock} />

        <Header title="ListaFunction.js" />
        <ListaFunction arr={numerosMock} />

        <Header title="Blog.js" />
        <Blog posts={postsMock} />
    </>)
}