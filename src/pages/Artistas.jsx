import { useRef, useState } from "react";
import { uploadImageToBack } from "../services/upload";
import { Conatiner, ElBoton, Titulo , Input } from "../Styled/ArtistasStyles";
import { Select, Option } from "../Styled/RegisterStyled";
import { uploadProduct } from "../services/product";

const Artistas = ({user}) => {
    const [uploadImage,setUploadImage] = useState();
    const [product, setProduct] = useState({options:[], image:user?.artistData.images[0]});
    const [category, setCategory] = useState();
    const categorySelect = useRef();
    const [categoryList, setCategoryList] = useState([]);
    const [option, setOption] = useState();


    console.log(product);
    

    return (
        <div>
            <Titulo>Artistas</Titulo>
            <Conatiner>
                <Input type="file" onChange={(e)=>setUploadImage(e.target.files[0])}/>

                <ElBoton onClick={()=>{
                    uploadImageToBack(uploadImage);
                }}>Subir Imagen </ElBoton>
                <ElBoton>Eliminar</ElBoton><br/>
               
                
                <form>
                    
                    
                    <Input type="text" placeholder="Titulo" onChange={e => setProduct({...product, title: e.target.value})}/>
                    <Input type="text" placeholder="Descripcíon" onChange={e => setProduct({...product, description: e.target.value})}/>
                    <Input type="number" placeholder="Precio base" onChange={e => setProduct({...product, price: e.target.value})}/>
                    <br/>
                    <Select onChange={e => setProduct({...product, image: e.target.value})}> 
                        {
                            user?.artistData.images.map(image => {
                                const imageName = image.slice(image.lastIndexOf("/")+1)
                                return <Option key={imageName} value={image} >{imageName}</Option>
                            })
                        }
                    </Select><br/>
                    <Input type="text" placeholder="Categoria" onChange={(e) => setCategory(e.target.value)}/>
                    <ElBoton type="button" onClick={()=>setCategory([...categories, categoryInput ] )}>Añadir Categoria</ElBoton><br/>
                    <Select onChange={(e)=>selectedCategory(e.target.value)}>
                        {product.options.reduce((acc, option)=> acc.includes(option.category) ? acc : [...acc, option.category], []).map(category => <Option key={category} value={category}>{category}</Option>)}
                    </Select>
                    <Input type="text" placeholder="Opción" onChange={(e) => setOption({...option, option: e.target.value}) }/>
                    <Input type="number" placeholder="Precio" onChange={(e) => setOption({...option, price: e.target.value})}/>
                    <ElBoton type="button" onClick={()=>setProduct({...product, options:[...product.options, { ...option, category:categorySelect.current.value }]})}>Añadir opción</ElBoton>
                    <ElBoton type="button" onClick={()=> uploadProduct(product)} > Subir Producto</ElBoton> 
                        


                    
                </form>
            </Conatiner>

        </div>
    );
};

export default Artistas;