import Footer from "@/componentes/footer";
import NavNutritionist from "@/componentes/navNutritionist";
import Image from "next/image";
import Link from "next/link";


export default function verCitas (){
    return(
        <>

        <NavNutritionist/>

        <div class='container-citasAdmin' >

            <div class='card-perfilAdmin' >
                <span class='card-imgAdmni'>
                    <Link href='/nutritionistViews/nutritionistVerPerfiles'>
                        <Image src='/img/perfil.png' width={80} height={120} style={{borderRadius:'50%'}}></Image>
                    </Link>
                </span>
                <br/>
                <div class='card-infoAdmin' >
                    <h5>William de Jesus Espinosa Garcia</h5>
                    <p>22/11/2023 </p>
                    <p> 10:00 am</p>
                </div>
            </div>

            <div class='card-perfilAdmin' >
                <span class='card-imgAdmni'>
                    <Link href='/nutritionistViews/nutritionistVerPerfiles'>
                        <Image src='/img/perfil.png' width={80} height={120} style={{borderRadius:'50%'}}></Image>
                    </Link>
                </span>
                <br/>
                <div class='card-infoAdmin' >
                    <h5>William de Jesus Espinosa Garcia</h5>
                    <p>22/11/2023 </p>
                    <p> 10:00 am</p>
                </div>
            </div>

            <div class='card-perfilAdmin' >
                <span class='card-imgAdmni'>
                    <Link href='/nutritionistViews/nutritionistVerPerfiles'>
                        <Image src='/img/perfil.png' width={80} height={120} style={{borderRadius:'50%'}}></Image>
                    </Link>
                </span>
                <br/>
                <div class='card-infoAdmin' >
                    <h5>William de Jesus Espinosa Garcia</h5>
                    <p>22/11/2023 </p>
                    <p> 10:00 am</p>
                </div>
            </div>

            <div class='card-perfilAdmin' >
                <span class='card-imgAdmni'>
                    <Link href='/nutritionistViews/nutritionistVerPerfiles'>
                        <Image src='/img/perfil.png' width={80} height={120} style={{borderRadius:'50%'}}></Image>
                    </Link>
                </span>
                <br/>
                <div class='card-infoAdmin' >
                    <h5>William de Jesus Espinosa Garcia</h5>
                    <p>22/11/2023 </p>
                    <p> 10:00 am</p>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}