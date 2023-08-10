import Blog from "./Blog";
import ListaClass from "./ListaClass";
import ListaFunction from "./ListaFunction";

import { posts } from "./Blog";
import { numeros } from "./numeros";
import Titulo from "../../utils-components/Titulo";

export default function AllListasEChaves() {
    return (<>
        <Titulo title="ListaClass.js" component={<ListaClass arr={numeros} />} />
        <Titulo title="ListaFunction.js" component={<ListaFunction arr={numeros} />} />
        <Titulo title="Blog.js" component={<Blog posts={posts} />} />
    </>)
}