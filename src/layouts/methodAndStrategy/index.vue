<script setup>

</script>

<template>
    <v-container>
        <v-row no-gutters class="row">
            <v-col cols="6" class="cols" align-self="center">
                <h1>
                    二、 實施策略及方法
                </h1>
                <p>
                    本專案計畫—屏東縣食品加工產業數位轉型計畫，
                    將聚焦在屏東縣食品加工產業的輔導，本計畫的執行規劃架構如圖1，說明如下：
                </p>

                <ul class="list">
                    <li>
                        <b>食品加工數位轉型平台</b>：本計畫建置「食品加工數位轉型平台」，
                        輔導參與廠商建立生產管理、智慧製造、研發創新、創新營運、行銷推廣、人才培訓的需求。
                    </li>
                    <li>
                        <b>屏東縣食品加工製造商</b>：本計畫參與的屏東縣在地食品加工廠商有12家，將其分為
                        「農產加工廠商」、「魚肉加工廠商」、「行銷支援廠商」3個類型，說明如下：

                        <ul class="list">
                            <li>
                                <b>農產加工廠商(6家廠商)</b>：京冠生物科技股份有限公司、晨間廚房餐飲有限公司、鳳有茶莊、巴魯那商行、隆興製麵有限公司、智諦科農股份有限公司。
                            </li>
                            <li>
                                <b>魚肉加工廠商(4家廠商)</b>：戎的魚店有限公司、中央畜產有限公司、珍品新貿易有限公司(復興肉酥)、安德魯紳有限公司(香腸世家)。
                            </li>
                            <li>
                                <b>行銷支援廠商(2家廠商)</b>：同康科技股份有限公司(同合農科商務會館)、集智學習科技股份有限公司。
                            </li>
                        </ul>
                    </li>
                    <li>
                        <b>屏東大學專家團隊</b>：本計畫由國立屏東大學7位教授組成跨領域專家團隊，並且本校研究發展處亦提供本計畫行政支援、協助產學合作、協助專利技轉申請等工作。
                    </li>
                    <li>
                        <b>地產業公協會</b>：本計畫合作的在地產業公協會為<b>屏東縣中小企業榮譽指導員協進會</b>，
                        主要的合作項目及內容為提供技術交流、協助產學合作、協助人才培育、實習與就業人才媒合等工作。
                    </li>
                    <li>
                        <b>法人單位</b>：本計畫合作的法人單位為<b>金屬工業研究中心</b>，提供技術交流、協助產學合作、協助人才培育、實習與就業人才媒合等工作。
                    </li>
                </ul>
            </v-col>
            <v-col cols="6" class="cols" align-self="center">
                <v-img src="/methodAndStrategy2.jpg"></v-img>
                <v-col style="text-align: center;">圖1. 本計畫之執行規劃架構及運作策略</v-col>
            </v-col>
        </v-row>

        <v-row no-gutters class="row">
            <v-col cols="6" class="cols" align-self="center">
                <p>
                    本計畫將依照圖1之執行規劃架構及運作策略，實施的具體方法如圖2所示，說明如下：
                </p>
                <ul class="list">
                    <li>
                        <b>專家諮詢服務</b>：本計畫提供聯絡窗口，接受廠商需求及問題，並且協助安排專家諮詢及廠商接觸服務。廠商可獲得本團隊專家學者提供有關營運發展計畫、專利檢索與分析服務之諮詢協助等服務。
                    </li>
                    <li>
                        <b>診斷訪視服務</b>：本計畫安排教授專家到公司現場訪視，以確實了解廠商需求及問題，並且依照需求提供改善建議，以即時協助廠商解決問題。廠商得向本團隊申請專家顧問諮詢及技術服務團隊赴公司診斷訪視服務。
                    </li>

                    <li>
                        <b>技術交流服務</b>：本計畫提供交流群組及數位轉型輔導平台，透過導入人工智慧(AI)、大數據(Big Data)、物聯網(IoT)核心技術之開發及應用範例，本團隊與廠商之技術資源及成果可以互享。
                    </li>
                    <li>
                        <b>協助申請政府相關計畫與資源</b>：本計畫協助廠商申請政府研發、輔導補助等相關計畫與資源時，得由廠商委託本團隊專家學者協助撰寫申請計畫書。
                    </li>
                </ul>
            </v-col>
            <v-col>
                <v-img src="/methodAndStrategy.jpg"></v-img>
                <v-col style="text-align: center;">圖2. 本計畫實施的具體方法</v-col>
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
