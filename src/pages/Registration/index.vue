<template>
    <div>
        <UserAddIcon class="icon6"/>
        <div class="blockRegestration">
        <div class="Regestration">
            <h3 >Реєстрація</h3>
            <input type="text" placeholder="П.І.Б">
            <br>
            <br>
            <input type="text" placeholder="Пошта">
            <br>
            <br>
            <input type="text" placeholder="Номер">
            <br>
            <br>
            <input type="text" placeholder="Логін">
            <br>
            <br>
            <input type="text" placeholder="Пароль">
            <br>
            <br>
            <input type="text" placeholder="Повтор паролю">
            <br>
            <br>
            <button>Зареєструватися</button>

        </div>
        <hr class="vertical" />
         <LoginIcon class="icon7"/>
        <div class="blockEnt">
            <h3 >Вхід</h3>
            <input type="text" placeholder="Логін">
            <br>
            <br>
            <input type="text" placeholder="Пароль">
            <br>
            <br>
            <button>Увійти</button>
        </div>
         </div>
    </div>
</template>

<script>
import { UserAddIcon } from "@vue-hero-icons/outline"
import { LoginIcon } from "@vue-hero-icons/outline"
    export default {
        name: 'Registration',
 components: { UserAddIcon,LoginIcon
  }
    }
</script>