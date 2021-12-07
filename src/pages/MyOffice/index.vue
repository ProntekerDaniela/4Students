<template>
    <div>
        <div class="myAccountInfo">
            <UserCircleIcon  class="icon10"/>
            <p id="cabinet">Мій кабінет</p>
            <UploadIcon class="icon9"/>
            <div class="timeoutPhoto">
                Загрузити <br>зображення
            </div>
            <p id="infoContacts">
                Прізвища Ім’я По-батькові <br>
                <br>Номер телефону: 0123456789 <br>
               <br> Пошта: Account@gmail.com <br>
            </p>
            <router-link to="/AboutE" class="pages" id="addAdvertisement">Додати Е</router-link><br>
            <XIcon class="icon11"/>
            <p id="myAdvertisemen">
                Заборонені для мене добавки
            </p>
            <div id="Advertisemen">
            </div>
        </div>
        
    </div>
</template>

<script>
import { UploadIcon } from "@vue-hero-icons/outline"
import { UserCircleIcon } from "@vue-hero-icons/solid"
import { XIcon } from "@vue-hero-icons/outline"
    export default {
     components: {  UploadIcon,UserCircleIcon,XIcon
  }
    } 
    
</script>

