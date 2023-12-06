'use client'
import Footer from "@/componentes/footer";
import NavNutritionist from "@/componentes/navNutritionist";
import Image from "next/image";
import Swal from "sweetalert2";



export default function verPeriles () {

    const alertActualizar = () =>{
        Swal.fire({
            icon: "success",
            title: "Datos Actualizados",
            showConfirmButton: false,
            timer: 2500
          });
    }

    return (
        <>
        <NavNutritionist/>
        
        <div style={{marginLeft:'25%'}}>
            <div class='name'>
                <form>
                    <label for='name' class='label-nameProfile'>
                    Nombre:
                    </label>
                    <input type="text" id='name'class='input-nameProfile' />
                </form>
                <form>
                    <label for='apellido' class='label-apellidoProfile' >Apellidos:</label>
                    <input id='apellido' class='input-apellidoProfile' />
                </form>
            </div >

            <div class='img-Profile'>
                <Image src='/img/perfil.png' width={205} height={200} ></Image>
            </div>

            <div class='biografia'>
                <form>
                    <label for='edad' class='label-edadProfile'>Edad:</label>
                    <input id='edad' type="text" class='input-edadProfile' />
                </form>
                
                <form>
                    <label for='peso' class='label-pesoProfile' >Peso:</label>
                    <input id='peso' type="text" class='input-pesoProfile' />
                </form>

                <form>
                    <label for='estatura' class='label-estaturaProfile' >Estatura:</label>
                    <input id='estatura' type="text" class='input-estaturaProfile' />
                </form>

                <form>
                        <label for='alergias' class='label-alergiasProfile' >Alergias:</label>
                        <input id='alergias' type="text" class='input-alergiasProfile' />
                </form>

                <form>
                        <label for='comidas' class='label-comidasProfile' >Comidas favoritas:</label>
                        <input id='comidas' type="text" class='input-comidasProfile' />
                </form>

                <form>
                        <label for='pesoObjetivo' class='label-pesoObjetivoProfile' >Peso Objetivo:</label>
                        <input id='pesoObjetivo' type="text" class='input-pesoObjetivoProfile' />
                </form>

            </div>

            <button class="btn btn-outline-primary" type="submit" onClick={alertActualizar} style={{display:'flex', margin:'8% 32% '}} >actualizar</button>
        </div>
        <Footer/>
        </>
    )
}