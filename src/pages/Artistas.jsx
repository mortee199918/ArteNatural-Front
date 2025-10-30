import { useRef, useState } from "react";
import { uploadImageToBack, deleteImg } from "../services/upload";
import { Conatiner, ElBoton, Titulo , Input } from "../Styled/ArtistasStyles";
import { Select, Option } from "../Styled/RegisterStyled";
import { uploadProduct } from "../services/product";

const Artistas = ({user}) => {
    const [uploadImage,setUploadImage] = useState();
    const [product, setProduct] = useState({options:[], image:
        user?.artistData? 
        user.artistData.images[0] :
        null});
    const [categoryInput, setCategoryInput] = useState(); 
    const [categories, setCategories] = useState([]);
    const categorySelect = useRef();
    const [option, setOption] = useState();
    const [ deleteImage, setDeleteImage] = useState(user?.artistData? user.artistData.images[0] : null);


    

    return (
        <div>
            <Titulo>ARTiSTAS</Titulo>
            <Conatiner>
                <Input type="file" onChange={(e)=>setUploadImage(e.target.files[0])}/>

                <ElBoton onClick={()=>{
                    uploadImageToBack(uploadImage);
                }}>Subir Imagen </ElBoton>
                <br />
                    <Select onChange={e => setDeleteImage(e.target.value)}> 
                        {
                            user?.artistData?.images.map(image => {
                                const imageName = image.slice(image.lastIndexOf("/")+1)
                                return <Option key={imageName} value={image} >{imageName}</Option>
                            })
                        }
                    </Select>
                    <br />
                <ElBoton onClick={()=>{
                    console.log(deleteImage);
                    
                    deleteImg(deleteImage);
                }}>Eliminar</ElBoton><br/>
               
            </Conatiner>
            <Conatiner>
                <form>
                    
                    
                    <Input type="text" placeholder="Titulo" onChange={e => setProduct({...product, title: e.target.value})}/>
                    <Input type="text" placeholder="Descripcíon" onChange={e => setProduct({...product, description: e.target.value})}/>
                    <Input type="number" placeholder="Precio base" onChange={e => setProduct({...product, price: e.target.value})}/>
                    <br/>
                    <br />
                    <Select onChange={e => setProduct({...product, image: e.target.value})}> 
                        {
                            user?.artistData?.images.map(image => {
                                const imageName = image.slice(image.lastIndexOf("/")+1)
                                return <Option key={imageName} value={image} >{imageName}</Option>
                            })
                        }
                    </Select>
                    <br />
                    <Input type="text" placeholder="Categoria" onChange={(e) => setCategoryInput(e.target.value)}/>
                    <ElBoton type="button" onClick={()=>setCategories([...categories, categoryInput ] )}>Añadir Categoria</ElBoton><br/>
                    <br />
                    <Select ref={categorySelect}>
                        {product.options.reduce((acc, option)=> acc.includes(option.category) ? acc : [...acc, option.category], []).map(category => <Option key={category} value={category}>{category}</Option>)}
                        {categories?.map(category => <Option key={category} value={category}>{category}</Option>)}
                    </Select>
                    <br />
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