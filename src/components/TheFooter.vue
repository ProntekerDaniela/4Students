<template>
  <footer>
      <div class="row">
          <div class="col">
              <h3>Follow us</h3>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24px" height="24px" class="icon4"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                 
              <a href="https://twitter.com/efood">
               Facebook @efood
              </a>
              <br>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24px" height="24px" class="icon5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  
              <a href="https://instagram.com/efood">
                  Instagram @efood
              </a>
          </div>
          <div class="col">
              <h3>Contact us</h3>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24px" height="24px" class="icon3"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              <a href="mailto:efood@gmail.com">
                  efood@gmail.com
              </a>
              <br>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24px" height="24px" class="icon2"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  
              <a href="tel:+380500122355">
                  +380500122355
              </a>
          </div>
      </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid gray;
    margin-top: 300px;
    padding: 2px;


    bottom: 0;
    left: 0;
}

.row {
    display: flex;
    flex-direction: row;
    column-gap: 32px;
}

.col {
    background-color: white;
    border-radius: 4px;
    padding: 16px;
    min-width: 250px;
}
</style>