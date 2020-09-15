##  Grachev Roman

### Conacts


* phone: +7906 8970429
* telegram: GrachevRV 
* discord: Roman_Gr#6347
* e-mail: grachevrv@ya.ru

***
### Info

I am 46 years old,  26 of them are businessman. I can teach and learn quickly. 
***
### Skills

HTML, CSS, JS, VUE, NODE, MONGODB, Firebase, GIT. Visual Studio Code.

***
### Code examples


      <div class="md-layout md-alignment-center-center">
      <md-content class="md-layout-item md-size-60 md-small-size-100">
        <md-progress-bar md-mode="indeterminate" v-if="loading" />
        <div
          class="md-layout-item md-size-100 md-small-size-100 md-layout md-alignment-center-left"
        >
          <div v-if="SELECTED_CATEGORIES" class="md-layout-item md-small-hide md-size-20">{{SELECTED_CATEGORIES.toUpperCase()}}:</div>
          <div class="md-layout-item subcategory">
            <md-chip
              md-clickable
              v-for="(subcategory,index) in SUBCATEGORY"
              :key="index"
              @click="toShowcase(subcategory)"
            >{{subcategory}}</md-chip>
            <md-button
              v-if="IS_SUBCATEGORY_SELECT"
              class="md-icon-button md-accent md-dense"
              @click="delSubcategory"
            >
              <md-icon>
                <font-awesome-icon icon="times" />
              </md-icon>
            </md-button>
          </div>
        </div>
        <div class="md-layout">          
          <ProductCard
            v-for="(product, index) in SORTED_PRODUCTS"
            :key="index"
            :product_data="product"
          />
        </div>
      </md-content>
    </div>
  


***
### Experience

Teacher of "Web development" at the Qbit club (https://vk.com/qbitclub)

http://grif-qbit.duckdns.org:10080/grachevrv

***
### Education

University: 

1991 -1996  -  economist

1998- 2001 -  lawyer

Сourses:

2017  -  Сoursera: "Introduction to swift"

2018 -  Codery (React, Express, Node, AWS)

2019 - Udemy (NodeJS) 

2019 - Udemy (Introduction to HTML, CSS) 

***
### English level

pre-intermediate
