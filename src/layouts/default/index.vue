<script setup>

</script>

<template>
    <v-container>
        <v-row no-gutters class="row">

            <v-col cols="6" class="cols" align-self="center">
                <h1>
                    一、 計畫目標
                </h1>
                <p>
                    屏東縣是國內重要的農業大縣，一年四季皆盛產各種不同的農產品，
                    非常獲得消費者的歡迎與喜愛。農產品是食品加工的主要原料，
                    但是屏東縣農業以「小農」為主，因而農產品卻沒有太高的知名度；
                    而且對於大量且穩定的農產品供貨能力明顯不足；
                    另外，農產品也會受到天然災害及疫情持續(COVID-19)的影響，
                    急需投入推動產銷調節，加強數位行銷及擴大內需市場等措施。
                </p>

                <p>
                    本計畫名稱為「屏東縣食品加工產業數位轉型計畫」，
                    將聚焦在屏東縣食品加工產業，並且以農產品加工產業及魚肉產品加工產業為主，
                    協助與輔導食品加工廠商在生產端或顧客服務端的數位體質強化及創造新營收加速企業數位轉型。
                </p>

                <ul class="list">
                    <li>
                        建置「食品加工數位轉型平台」，協助參與的每家廠商執行生產、研發、行銷及人才培育的需求。
                    </li>
                    <li>
                        協助廠商提升技術層次，強化生產設備、產線自動化及智慧化設備導入。
                    </li>
                    <li>
                        協助參與廠商產品之行銷推廣，提升公司自有品牌及產品項目曝光度。
                    </li>
                    <il>
                        建立產業合作人才培育機制，推動學生參與校外實習及專題製作，培育專業人才。
                    </il>
                </ul>
            </v-col>
            <v-col cols="6" class="cols" align-self="center">
                <v-img src="/root.jpg"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped lang="scss">
.row {
    margin-bottom: 50px;
}

.cols {

    padding: 5px !important;

    p {
        text-indent: 2em;
        margin-bottom: 1em;
    }

}

.list {
    list-style: decimal;
    padding: 0 0em 0 2em;
    margin-bottom: 1em;

    &.dot {
        list-style: disc;
    }

    li {
        margin: 5px auto;
    }

    ul {
        list-style-type: disc;
    }
}
</style>
