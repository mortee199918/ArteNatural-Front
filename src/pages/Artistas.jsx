import { useState } from "react";
import { uploadImageToBack } from "../services/upload";
import { Conatiner, ElBoton, Titulo , Input } from "../Styled/ArtistasStyles";
import { Select, Option } from "../Styled/RegisterStyled";

const Artistas = ({user}) => {
    const [uploadImage,setUploadImage] = useState();
    const [product, setProduct] = useState();
    const [category, setCategory] = useState();
    


    console.log(user?.artistData.images);
    

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
                    <Input type="text" placeholder="Descripcíon" onChange={e => setProduct({...product, desciption: e.target.value})}/>
                    <Input type="number" placeholder="Precio base" onChange={e => setProduct({...product, price: e.target.value})}/>
                    <br/>
                    <Select> 
                        {
                            user?.artistData.images.map(image => {
                                const imageName = image.slice(image.lastIndexOf("/")+1)
                                return <Option value="image" >{imageName}</Option>
                            })
                        }
                    </Select><br/>
                    <Input type="text" placeholder="Categoria" onChange={(e) => setCategory(e.target.value)}/>
                    <ElBoton type="button" onClick={()=>setCategory([...categories, categoryInput ] )}>Añadir Categoria</ElBoton><br/>
                    <Select onChange={(e)=>selectedCategory(e.target.value)}>
                        {categories?.map(category => <Option value={category}>{category}</Option>)}
                    </Select>
                    <Input type="text" placeholder="Opción" onChange={(e) => setOptionInput(e.target.value) }/>
                    <Input type="number" placeholder="Precio" onChange={(e) => setOptPrice(e.target.value)}/>
                    <ElBoton type="button" onClick={()=>setOptions([...options, {category:selectedCategory, option:optionInput, price:optPrice}])}>Añadir opción</ElBoton>
                
                        


                    
                </form>
            </Conatiner>

        </div>
    );
};

export default Artistas;