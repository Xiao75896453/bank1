/*section-1*/

window.onload = function() {
    var olink1 = document.getElementById("S1A7content1");
    var olink2 = document.getElementById("S1A7content2");
    var olink3 = document.getElementById("S1A7content3");
    olink1.onclick = function() {
        olink1.style.color = "red";
        olink2.style.color = "white";
        olink3.style.color = "white";
    }
    olink2.onclick = function() {
        olink2.style.color = "red";
        olink1.style.color = "white";
        olink3.style.color = "white";
    }
    olink3.onclick = function() {
        olink3.style.color = "red";
        olink1.style.color = "white";
        olink2.style.color = "white";
    }
}
$("#S1A1img").click(function() {
    $("#S1Arow2").slideToggle("slow");
});
$("#S1A3img").click(function() {
    $("#S1Arow4").slideToggle("slow");
});
/*section-2*/
function SwitchPages(page, side) {
    if (side == 1) {
        var $content = $(`.left_div`);
    } else {
        var $content = $(`.right`);
    }

    var page = page;
    if (page == 'record') {
        // 核貸紀錄
        const newContentHtml = `                            <div class="indexBar">
        <div class="indexTitle">
            <p class="first-word"> 核貸紀錄 </p>
        </div>

        <div class="index ">
            <a class="index-word in-apply" href="#S2A"> 申請內容 </a>
            </br>
            <a class="index-word in-record" href="#S2B"> 審核紀錄 </a>
            </br>
            <a class="index-word in-opinion" href="#S2D"> 核委意見 </a>
        </div>
    </div>
    <div class="left">
        <div class="content">

            <section class="S2row scrollable-section" id="S2A">
                <div class="S2subrow S2topic " id="S2Atopic">
                    <p>業務人員申請內容</p>
                </div>
                <div class="S2subrow" id="S2Arow1">
                    <div class="S2A1item" id="S2A101">
                        <p class="S2A1title">業務員/單位 : </p>
                        <p class="S2A1content S2A1text">林銘洲/消金業務部</p>
                    </div>
                    <div class="S2A1item" id="S2A102">
                        <p class="S2A1title">核貸總金額 : </p>
                        <p class="S2A1content S2A1number">700000</p>
                    </div>
                </div>



                <div class="S2subrow" id="S2Arow2">
                    <div class="S2A2colume" id="S2A2colume1">
                        <div class="S2A2item" id="S2A201">
                            <img class="S2AAicon" src="assets/\media/\check.png">
                            <p class="S2A2title">貸款產品</p>
                            <p class="S2A2content S2A2text">42信用貸款</p>
                        </div>
                        <div class="S2A2item" id="S2A202">
                            <img class="S2AAicon" src="assets/\media/\check.png">
                            <p class="S2A2title">貸款金額</p>
                            <p class="S2A2content S2A2number">700000</p>
                        </div>
                        <div class="S2A2item" id="S2A203">
                            <img class="S2AAicon" src="assets/\media/\check.png">
                            <p class="S2A2title">月付金</p>
                            <p class="S2A2content S2A2number">14514</p>
                        </div>
                        <div class="S2A2item" id="S2A204">
                            <img class="S2AAicon" src="assets/\media/\check.png">
                            <p class="S2A2title">還款方式</p>
                            <p class="S2A2content S2A2text">平均攤還本息</p>
                        </div>
                        <div class="S2A2item" id="S2A207">
                            <img class="S2AAicon" src="assets/\media/\check.png">
                            <p class="S2A2title">保證人提供</p>
                            <p class="S2A2content S2A2text">否</p>
                        </div>
                        <div class="S2A2item" id="S2A208">
                            <img class="S2AAicon" src="assets/\media/\check.png">
                            <p class="S2A2title">風險性資產</p>
                            <p class="S2A2content S2A2number">522375</p>
                        </div>
                        <div class="S2A2item" id="S2A209">
                            <img class="S2AAicon" src="assets/\media/\check.png">
                            <p class="S2A2title">資金用途別</p>
                            <p class="S2A2content S2A2text">家庭週轉金</p>
                        </div>
                        <div class="S2A2item" id="S2A210">
                            <img class="S2AAicon" src="assets/\media/\check.png">
                            <p class="S2A2title">風險定價期數</p>
                            <p class="S2A2content S2A2text">豐利金一段式</p>
                        </div>
                    </div>
                    <div class="S2A2colume" id="S2A2colume2">
                        <div class="S2A2item1" id="S2A205">
                            <p class="S2A2title">風險定價</p>
                            <p class="S2A2content S2A2text">是</p>
                        </div>
                        <div class="S2A2item1" id="S2A206">
                            <p class="S2A2title">風險權數</p>
                            <p class="S2A2content S2A2percemt">75</p>

                        </div>
                    </div>
                </div>
                <div class="S2subrow" id="S2Arow3">
                    <div class="S2A3colume" id="S2A3colume1">
                        <p class="S2A3title">期數</p>
                        <p class="S2A3content"> 1-60</p>
                    </div>
                    <div class="S2A3colume" id="S2A3colume2">
                        <p class="S2A3title">利率</p>
                        <p class="S2A3content">105個金放款/房貸指標(月)+7.89%，機動</p>
                    </div>
                    <div class="S2A3colume" id="S2A3colume3">
                        <p class="S2A3title">目前利率</p>
                        <p class="S2A3content">8.95%</p>
                    </div>
                    <div class="S2A3colume" id="S2A3colume4">
                        <p class="S2A3title">CustType</p>
                        <p class="S2A3content">D</p>
                    </div>
                    <div class="S2A3colume" id="S2A3colume5">
                        <p class="S2A3title">風險性資產</p>
                        <p class="S2A3content">522375</p>
                    </div>
                    <div class="S2A3colume" id="S2A3colume6">
                        <p class="S2A3title">風險性資產比率</p>
                        <p class="S2A3content">74.6%</p>
                    </div>
                </div>
                <div class="S2subrow" id="S2Arow4">
                    <div class="S2A4colume" id="S2A4colume1">
                        <p class="S2A4title1">+A.放款利率</p>
                        <p class="S2A4title1">預定承作利率(首年)</p>
                        <p class="S2A4content1">9.95</p>
                    </div>
                    <div class="S2A4colume" id="S2A4colume2">
                        <p class="S2A4title1">-B.參考價格</p>
                        <p class="S2A4title3">資金成本</p>
                        <p class="S2A4title3">營運成本</p>
                        <p class="S2A4title3">預期風險損失成本</p>
                        <p class="S2A4content3">0.534</p>
                        <p class="S2A4content3">0.271</p>
                        <p class="S2A4content3">2.34</p>
                    </div>
                    <div class="S2A4colume" id="S2A4colume3">
                        <p class="S2A4title1">=C.合理收益</p>
                        <p class="S2A4content1">5.805</p>
                    </div>
                    <div class="S2A4colume" id="S2A4colume4">
                        <p class="S2A4title1">+D.整體貢獻度說明</p>
                        <p class="S2A4title2">手續費率</p>
                        <p class="S2A4title2">其他貢獻度</p>
                        <p class="S2A4content2">1.143</p>
                        <p class="S2A4content2">0</p>
                    </div>
                    <div class="S2A4colume" id="S2A4colume5">
                        <p class="S2A4title1">=E.合理利潤</p>
                        <p class="S2A4content1">6.948</p>
                    </div>
                    <div class="S2A4colume" id="S2A4colume6">
                        <p class="S2A4title1">合理利潤</p>
                        <p class="S2A4title3">流動貼水</p>
                        <p class="S2A4title3">資本成本</p>
                        <p class="S2A4title3">其他</p>
                        <p class="S2A4content3">0.312</p>
                        <p class="S2A4content3">0.638</p>
                        <p class="S2A4content3">5.998</p>
                    </div>
                </div>
            </section>

            <section class="S2row scrollable-section" id="S2B">
                <div class="S2subrow S2topic" id="S2Btopic">
                    <p>核貸委員審核紀錄</p>
                </div>
                <div class="S2subrow" id="S2Brow1">
                    <div class="S2B1item" id="S2B101">
                        <p class="S2B1title">實際簽核人員/單位</p>
                        <p class="S2B1content"></p>
                    </div>
                    <div class="S2B1item" id="S2B102">
                        <p class="S2B1title">簽核日期</p>
                        <p class="S2B1content">2019/04/16 15:34</p>
                    </div>

                </div>
                <div class="S2subrow" id="S2Brow2">
                    <div class="S2B2item" id="S2B201">
                        <p class="S2B2title">簽核結果</p>
                        <p class="S2B2content S2B2text">同意</p>
                    </div>
                    <div class="S2B2item" id="S2B202">
                        <p class="S2B2title">同意項目</p>
                        <p class="S2B2content S2B2text">核貸條件</p>
                    </div>
                    <div class="S2B2item" id="S2B203">
                        <p class="S2B2title">初始建議額度</p>
                        <p class="S2B2content S2B2text">123456</p>
                    </div>
                    <div class="S2B2item" id="S2B204">
                        <p class="S2B2title">審核意見</p>
                        <p class="S2B2content S2B2text">55555</p>
                    </div>
                </div>
                <div class="S2subrow" id="S2Brow3">
                    <div class="S2B3colume" id="S2B3colume1">
                        <p class="S2B3title">貸款產品</p>
                        <input type="text" class="S2B3text">
                    </div>
                    <div class="S2B3colume" id="S2B3colume2">
                        <p class="S2B3title">提供保證人</p>
                        <input type="checkbox" class="S2B3checkbox">
                    </div>
                    <div class="S2B3colume" id="S2B3colume3">
                        <p class="S2B3title">金額</p>
                        <input type="text" class="S2B3text">
                    </div>
                    <div class="S2B3colume" id="S2B3colume4">
                        <p class="S2B3title">可使用額度</p>
                        <input type="text" class="S2B3text">
                    </div>
                    <div class="S2B3colume" id="S2B3colume5">
                        <p class="S2B3title">總期數</p>
                        <input type="text" class="S2B3text">
                    </div>
                </div>
                <div class="S2subrow" id="S2Brow4">
                    <div class="S2B4colume" id="S2B4colume1">
                        <p class="S2B4title1">+A.放款利率</p>
                        <p class="S2B4title1">預定承作利率(首年)</p>
                        <p class="S2B4content1">9.95</p>
                    </div>
                    <div class="S2B4colume" id="S2B4colume2">
                        <p class="S2B4title1">-B.參考價格</p>
                        <p class="S2B4title3">資金成本</p>
                        <p class="S2B4title3">營運成本</p>
                        <p class="S2B4title3">預其風險損失成本</p>
                        <p class="S2B4content3">0.542</p>
                        <p class="S2B4content3">0.271</p>
                        <p class="S2B4content3">2.34</p>
                    </div>
                    <div class="S2B4colume" id="S2B4colume3">
                        <p class="S2B4title1">=C.合理收益</p>
                        <p class="S2B4content1">5.797</p>
                    </div>
                    <div class="S2B4colume" id="S2B4colume4">
                        <p class="S2B4title1">+D.整體貢獻度說明</p>
                        <p class="S2B4title2">手續費率</p>
                        <p class="S2B4title2">其他貢獻度</p>
                        <p class="S2B4content2">1.143</p>
                        <p class="S2B4content2">0</p>
                    </div>
                    <div class="S2B4colume" id="S2B4colume5">
                        <p class="S2B4title1">=E.合理利潤</p>
                        <p class="S2B4content1">6.94</p>
                    </div>
                    <div class="S2B4colume" id="S2B4colume6">
                        <p class="S2B4title1">合理利潤</p>
                        <p class="S2B4title3">流動貼水</p>
                        <p class="S2B4title3">資本成本</p>
                        <p class="S2B4title3">其他</p>
                        <p class="S2B4content3">0.298</p>
                        <p class="S2B4content3">0.638</p>
                        <p class="S2B4content3">6.004</p>
                    </div>
                </div>
                <div class="S2subrow" id="S2Brow5">
                    <div class="S2B5colume" id="S2B5colume1">
                        <p class="S2B5title"></p>
                        <p class="S2B5content">實際簽核</p>
                        <p class="S2B5content">簽核人員</p>
                    </div>
                    <div class="S2B5colume" id="S2B5colume2">
                        <p class="S2B5title">姓名</p>
                        <p class="S2B5content">皮卡丘</p>
                        <p class="S2B5content">黃色的</p>
                    </div>
                    <div class="S2B5colume" id="S2B5colume3">
                        <p class="S2B5title">單位</p>
                        <p class="S2B5content">消金業務部</p>
                        <p class="S2B5content">消金業務部</p>
                    </div>
                    <div class="S2B5colume" id="S2B5colume4">
                        <p class="S2B5title">職稱</p>
                        <p class="S2B5content">消金業務部推廣</p>
                        <p class="S2B5content">消金業務部推廣</p>
                    </div>
                    <div class="S2B5colume" id="S2B5colume5">
                        <p class="S2B5title">無擔金額(百萬)</p>
                        <p class="S2B5content">(非核委)</p>
                        <p class="S2B5content">(非核委)</p>
                    </div>
                    <div class="S2B5colume" id="S2B5colume6">
                        <p class="S2B5title">授信金額(百萬)</p>
                        <p class="S2B5content"></p>
                        <p class="S2B5content"></p>
                    </div>
                    <div class="S2B5colume" id="S2B5colume7">
                        <p class="S2B5title">本案無擔金額權限</p>
                        <p class="S2B5content1">700000</p>
                    </div>
                    <div class="S2B5colume" id="S2B5colume8">
                        <p class="S2B5title">本案金額權限</p>
                        <p class="S2B5content1"></p>
                    </div>
                    <div class="S2B5colume" id="S2B5colume9">
                        <p class="S2B5title">簽核日期</p>
                        <p class="S2B5content1">2019/04/22</p>
                    </div>
                </div>
                <div class="S2subrow" id="S2Brow6">
                    <div class="S2B6colume" id="S2B6colume1">
                        <div class="S2B6item" id="S2B601">
                            <p class="S2B6title">案件送簽性質</p>
                            <p class="S2B6content S2B6text">簽核</p>
                        </div>
                        <div class="S2B6item" id="S2B602">
                            <p class="S2B6title">簽核結果</p>
                            <p class="S2B6content S2B6text">同意</p>
                        </div>
                        <div class="S2B6item" id="S2B603">
                            <p class="S2B6title">同意項目</p>
                            <p class="S2B6content S2B6text">6666</p>
                        </div>
                        <div class="S2B6item" id="S2B604">
                            <p class="S2B6title">是否為最高核委</p>
                            <p class="S2B6content S2B6text">否</p>
                        </div>
                    </div>
                    <div class="S2B6colume" id="S2B6colume2">
                        <div class="S2B6item1" id="S2B605">
                            <p class="S2B6title">建議額度</p>
                            <p class="S2B6content S2B7number">700000</p>
                        </div>
                        <div class="S2B6item1" id="S2B607">
                            <p class="S2B6title">風險性資產</p>
                            <p class="S2B6content">522375</p>
                        </div>
                        <div class="S2B6item1" id="S2B608">
                            <p class="S2B6title">風險性資產比率</p>
                            <p class="S2B6content">74.6%</p>
                        </div>
                    </div>
                </div>
                <div class="S2subrow" id="S2Brow7">
                    <div class="S2B7item" id="S2B701">
                        <p class="S2B7title">調整核貸金額原因</p>
                        <p class="S2B7content S2B7text">111111111111111111111</p>
                    </div>
                    <div class="S2B7item" id="S2B702">
                        <p class="S2B7title">審核意見</p>
                        <p class="S2B7content S2B7text">555555555555555555555</p>
                    </div>
                </div>
                <div class="S2subrow" id="S2Brow8">
                    <div class="S2B8colume" id="S2B8colume1">
                        <p class="S2B8title1">貸款產品</p>
                        <input type="text" class="S2B8content1 S2B8text">
                    </div>
                    <div class="S2B8colume" id="S2B8colume2">
                        <p class="S2B8title">連保</p>
                        <input type="checkbox" class="S2B8checkbox">
                        <p class="S2B8title">一般</p>
                        <input type="checkbox" class="S2B8checkbox">
                    </div>
                    <div class="S2B8colume" id="S2B8colume3">
                        <p class="S2B8title">金額</p>
                        <input type="text" class="S2B8content S2B8number">
                        <p class="S2B8title">可使用額度</p>
                        <input type="text" class="S2B8content S2B8number">
                    </div>
                    <div class="S2B8colume" id="S2B8colume4">
                        <p class="S2B8title">總期數</p>
                        <input type="text" class="S2B8content S2B8number">
                        <p class="S2B8title">展期次數</p>
                        <input type="text" class="S2B8content S2B8number">
                    </div>
                    <div class="S2B8colume" id="S2B8colume5">
                        <p class="S2B8title">利率</p>
                        <p class="S2B8content">pp</p>
                    </div>
                    <div class="S2B8section1">
                        <div class="S2B8item" id="S2B801">
                            <p class="S2B8title">還款方式</p>
                            <p class="S2B8content S2B8text">平均攤還本息</p>
                        </div>
                        <div class="S2B8item" id="S2B802">
                            <p class="S2B8title">資金用途別</p>
                            <p class="S2B8content S2B8text">家庭周轉金</p>
                        </div>
                        <div class="S2B8item" id="S2B803">
                            <p class="S2B8title">風險定價</p>
                            <p class="S2B8content S2B8text">是</p>
                        </div>
                        <div class="S2B8item" id="S2B804">
                            <p class="S2B8title">風險定價期數</p>
                            <p class="S2B8content S2B8text">無</p>
                        </div>
                    </div>
                    <div class="S2B8section2">
                        <div class="S2B8item1" id="S2B805">
                            <p class="S2B8title">先收息期數</p>
                            <p class="S2B8content S2B8number"></p>
                        </div>
                        <div class="S2B8item1" id="S2B806">
                            <p class="S2B8title">風險權數</p>
                            <p class="S2B8content S2B8percent">75%</p>
                        </div>
                        <div class="S2B8item1" id="S2B807">
                            <p class="S2B8title">風險性資產</p>
                            <p class="S2B8content S2B8number">522375</p>
                        </div>
                    </div>
                    <div class="S2B8section3">
                        <div class="S2B83item2" id="S2B808">
                            <p class="S2B83title">第</p>
                            <input type="text" class="S2B83text">
                            <p class="S2B83content">期起</p>
                        </div>
                        <div class="S2B83item2" id="S2B809">
                            <p class="S2B83title">利率</p>
                            <p class="S2B83content">機動</p>
                        </div>
                        <div class="S2B83item2" id="S2B810">
                            <p class="S2B83title">105個金放款/房貸指標(月)+7.89%</p>
                        </div>
                        <div class="S2B83item2" id="S2B811">
                            <p class="S2B83title">目前利率</p>
                            <p class="S2B83content S2B83percent">9%</p>
                        </div>
                    </div>
                </div>
                <div class="S2subrow" id="S2Brow9">
                    <p class="S2B9title">說明</p>
                    <input type="text" class="S2B9text">
                </div>

            </section>
            <section class="S2row scrollable-section" id="S2C">
                <div id="S2Ccolume1"></div>
                <div id="S2Ccolume2"></div>
                <div id="S2Ccolume3"></div>
                <div id="S2Ccolume4"></div>
            </section>
            <section class="S2row scrollable-section" id="S2D">
                <div class="S2subrow S2topic" id="S2Dtopic">
                    <p>核委意見</p>
                </div>
                <div class="S2subrow" id="S2Drow1">
                    <div class="S2D1colume" id="S2D1colume1">
                        <p class="S2D1title1">關係人姓名</p>
                        <p class="S2D1content1">何核核</p>
                    </div>
                    <div class="S2D1colume" id="S2D1colume2">
                        <p class="S2D1title1">ID</p>
                        <p class="S2D1content1"></p>
                    </div>
                    <div class="S2D1colume" id="S2D1colume3">
                        <p class="S2D1title1">Score 13 評分模組</p>
                        <p class="S2D1title4">卡別</p>
                        <p class="S2D1title4">Score 13</p>
                        <p class="S2D1title4">Risk Grade</p>
                        <p class="S2D1title4">風險區隔</p>
                        <p class="S2D1content4">卡一</p>
                        <p class="S2D1content4 S2D1number">443</p>
                        <p class="S2D1content4 S2D1number">6</p>
                        <p class="S2D1content4 S2D1level">高風險</p>
                    </div>
                    <div class="S2D1colume" id="S2D1colume4">
                        <p class="S2D1title1">Score 17 評分模組</p>
                        <p class="S2D1title3">Score 17</p>
                        <p class="S2D1title3">Risk Grade</p>
                        <p class="S2D1title3">風險區隔</p>
                        <p class="S2D1content3 S2D1number">413</p>
                        <p class="S2D1content3 S2D1number">7</p>
                        <p class="S2D1content3 S2D1level">D</p>
                    </div>
                    <div class="S2D1colume" id="S2D1colume5">
                        <p class="S2D1title1">J10信用評分</p>
                        <p class="S2D1content1 S2D1number">499</p>
                    </div>
                    <div class="S2D1colume" id="S2D1colume6">
                        <p class="S2D1title1">信用等級</p>
                        <p class="S2D1content1 S2D1level">A</p>
                    </div>
                </div>
                <div class="S2subrow" id="S2Drow2">
                    <div class="S2D2colume" id="S2D2colume1">
                        <p class="S2D2title"></p>
                        <p class="S2D2content">實際簽核</p>
                        <p class="S2D2content">簽核人員</p>
                    </div>
                    <div class="S2D2colume" id="S2D2colume2">
                        <p class="S2D2title">姓名</p>
                        <p class="S2D2content"></p>
                        <p class="S2D2content">小藍</p>
                    </div>
                    <div class="S2D2colume" id="S2D2colume3">
                        <p class="S2D2title">單位</p>
                        <p class="S2D2content"></p>
                        <p class="S2D2content">消金業務部</p>
                    </div>
                    <div class="S2D2colume" id="S2D2colume4">
                        <p class="S2D2title">職稱</p>
                        <p class="S2D2content"></p>
                        <p class="S2D2content">消金授信審查</p>
                    </div>
                    <div class="S2D2colume" id="S2D2colume5">
                        <p class="S2D2title">無擔金額(百萬)</p>
                        <p class="S2D2content"></p>
                        <p class="S2D2content">3</p>
                    </div>
                    <div class="S2D2colume" id="S2D2colume6">
                        <p class="S2D2title">授信金額(百萬)</p>
                        <p class="S2D2content"></p>
                        <p class="S2D2content">15</p>
                    </div>
                    <div class="S2D2colume" id="S2D2colume7">
                        <p class="S2D2title">本案無擔金額權限</p>
                        <p class="S2D2content1">123456</p>
                    </div>
                    <div class="S2D2colume" id="S2D2colume8">
                        <p class="S2D2title">本案金額權限</p>
                        <p class="S2D2content1">123456</p>
                    </div>
                    <div class="S2D2colume" id="S2D2colume9">
                        <p class="S2D2title">簽核日期</p>
                        <p class="S2D2content1">1111/11/11</p>
                    </div>
                </div>
                <div class="S2subrow" id="S2Drow3">
                    <div class="S2D3colume" id="S2D3colume1">
                        <div class="S2D3item2" id="S2D301">
                            <p class="S2D3title">借貸人月收入</p>
                            <input type="text" class="S2D3text">
                        </div>
                        <div class="S2D3item2" id="S2D302">
                            <p class="S2D3title">建議額度</p>
                            <input type="text" class="S2D3text">
                        </div>
                    </div>
                    <div class="S2D3colume" id="S2D3colume2">
                        <div class="S2D3item2" id="S2D303">
                            <p class="S2D3title">本次核貸金額加計無擔外債為月收入金額約</p>
                            <input type="text" class="S2D3text">
                            <p class="S2D3unit">倍</p>
                        </div>
                        <div class="S2D3item2" id="S2D304">
                            <p class="S2D3title">全體金融機構之無擔飽受信總餘額(含本次)為年所得之</p>
                            <input type="text" class="S2D3text">
                            <p class="S2D3unit">%</p>
                        </div>
                    </div>
                    <div class="S2D3colume" id="S2D3colume3">
                        <div class="S2D3item2" id="S2D305">
                            <p class="S2D3title">本次貸款支出調整為</p>
                            <input type="text" class="S2D3text">
                        </div>
                        <div class="S2D3item2" id="S2D306">
                            <p class="S2D3title">致當月結餘金額為</p>
                            <input type="text" class="S2D3text">
                        </div>
                    </div>
                    <div class="S2D3colume" id="S2D3colume4">
                        <div class="S2D3item3" id="S2D307">
                            <p class="S2D3title">本次貸款支出/總月收入</p>
                            <input type="text" class="S2D3text">
                            <p class="S2D3unit">%</p>
                        </div>
                        <div class="S2D3item3" id="S2D308">
                            <p class="S2D3title">總貸款支出/總月收入</p>
                            <input type="text" class="S2D3text">
                            <p class="S2D3unit">%</p>
                        </div>
                        <div class="S2D3item3" id="S2D309">
                            <p class="S2D3title">總月支出/總月收入</p>
                            <input type="text" class="S2D3text">
                            <p class="S2D3unit">%</p>
                        </div>
                    </div>
                    <div class="S2D3section" id="S2D310">
                        <p class="S2D3title">案件送簽性質</p>
                        <p class="S2D3content S2D3text">簽核</p>
                    </div>
                    <div class="S2D3section" id="S2D311">
                        <p class="S2D3content S2D3text">本案經評分卡核准，需經一位適當層級授信人員簽核</p>
                    </div>
                </div>
                <div class="S2subrow" id="S2Drow4">
                    <div id="S2D4section1"></div>
                    <p class="S2D4title">模板</p>
                    <!-- <p class="S2D4content S2D4choice" id="S2D401a">同業務人員</p>
                            <p class="S2D4content S2D4choice" id="S2D401b">同模型</p>
                            <p class="S2D4content S2D4choice" id="S2D401c">同核貸委員</p>
                            <p class="S2D4content S2D4choice" id="S2D401d">自行輸入</p> -->
                    <div id="S2D4section2">
                        <div class="S2D42colume" id="S2D42colume1">
                            <p class="S2D42title">貸款產品</p>
                            <input type="text" class="S2D42text">
                        </div>
                        <div class="S2D42colume" id="S2D42colume2">
                            <p class="S2D42title">連保</p>
                            <input type="checkbox" class="S2D42checkbox">
                        </div>
                        <div class="S2D42colume" id="S2D42colume3">
                            <p class="S2D42title">一般</p>
                            <input type="checkbox" class="S2D42checkbox">
                        </div>
                        <div class="S2D42colume" id="S2D42colume4">
                            <p class="S2D42title">金額</p>
                            <input type="text" class="S2D42text">
                        </div>
                        <div class="S2D42colume" id="S2D42colume5">
                            <p class="S2D42title">可使用額度</p>
                            <input type="text" class="S2D42text">
                        </div>
                        <div class="S2D42colume" id="S2D42colume6">
                            <p class="S2D42title">總期數</p>
                            <input type="text" class="S2D42text">
                        </div>
                        <div class="S2D42colume" id="S2D42colume7">
                            <p class="S2D42title">展期次數</p>
                            <input type="text" class="S2D42text">
                        </div>
                        <div class="S2D42colume" id="S2D42colume8">
                            <p class="S2D42title">利率</p>
                            <p class="S2D42content S2D42text"></p>
                        </div>
                    </div>
                    <div id="S2D4section3">
                        <div class="S2D43colume" id="S2D43colume1">
                            <p class="S2D43">計算風險定價</p>
                            <p class="S2D43">計算全案收益</p>
                            <p class="S2D43">第1期起</p>
                            <p class="S2D43">第1期起</p>
                            <p class="S2D43">第1期起</p>
                        </div>
                        <div class="S2D43colume" id="S2D43colume2">
                            <p class="S2D43"></p>
                            <p class="S2D43"></p>
                            <input type="checkbox" class="S2D4333">
                            <p class="S2D4350">固定</p>
                            <input type="checkbox" class="S2D4333">
                            <p class="S2D4350">固定</p>
                            <input type="checkbox" class="S2D4333">
                            <p class="S2D4350">固定</p>
                        </div>
                        <div class="S2D43colume" id="S2D43colume3">
                            <p class="S2D4325">資金用途別</p>
                            <select class="S2D4375" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            <p class="S2D4325">風險定價</p>
                            <p class="S2D4325">風險定價期數</p>
                            <select class="S2D4350" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            <select class="S2D4360" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            <select class="S2D4325" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            <p class="S2D4315">%</p>
                            <select class="S2D4360" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            <select class="S2D4325" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            <p class="S2D4315">%</p>
                            <select class="S2D4360" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            <select class="S2D4325" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            <p class="S2D4315">%</p>
                        </div>
                        <div class="S2D43colume" id="S2D43colume4">
                            <p class="S2D4325">還款方式</p>
                            <select class="S2D4375" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            <p class="S2D4325">風險權數</p>
                            <p class="S2D4375">%</p>
                            <input type="checkbox" class="S2D4308">
                            <p class="S2D4310">機動</p>
                            <select class="S2D4350" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            <select class="S2D4325" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            <input type="checkbox" class="S2D4308">
                            <p class="S2D4310">機動</p>
                            <select class="S2D4350" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            <select class="S2D4325" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            <input type="checkbox" class="S2D4308">
                            <p class="S2D4310">機動</p>
                            <select class="S2D4350" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                            <select class="S2D4325" name="請選擇">
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                    <option value="1">1</option>
                                </select>
                        </div>
                        <div class="S2D43colume" id="S2D43colume5">
                            <p class="S2D4350">先收息期數</p>
                            <input type="text" class="S2D4350">
                            <p class="S2D43"></p>
                            <input type="text" class="S2D4325">
                            <p class="S2D4308">%</p>
                            <p class="S2D4333">目前利率</p>
                            <input type="text" class="S2D4325">
                            <p class="S2D4308">%</p>
                            <input type="text" class="S2D4325">
                            <p class="S2D4308">%</p>
                            <p class="S2D4333">目前利率</p>
                            <input type="text" class="S2D4325">
                            <p class="S2D4308">%</p>
                            <input type="text" class="S2D4325">
                            <p class="S2D4308">%</p>
                            <p class="S2D4333">目前利率</p>
                            <input type="text" class="S2D4325">
                            <p class="S2D4308">%</p>
                        </div>
                    </div>
                </div>
                
            </section>


        </div>




    </div>`;


        $content.html(newContentHtml);
    } else if (page == 'loan') {
        // 核貸書
        const newContentHtml = `<img src="assets/media/winnie.jpg">
                <img src="assets/media/winnie.jpg">
                <img src="assets/media/winnie.jpg">`;
        $content.html(newContentHtml);

    } else if (page == 'application') {
        //申請書

    } else if (page == 'credit') {
        // 徵信

    } else if (page == 'image') {
        // 掃描
    } else if (page == 'edit_loan') {
        // 修改核貸書
    }

}

$(".loan").click(function(event) {
    var page = "loan";
    if ($(this).parent().is('.lc')) {
        console.log("a1")
        SwitchPages(page, 1); //左
    } else {
        console.log("a2")
        SwitchPages(page, 2); //右
    }
});


$(".db-bt").click(function(event) {
    console.log("2")
    if ($("#side-2").hasClass("off")) {
        console.log("3");
        $("#side-2").css("display", "block");
    } else {
        $("#side-2").css("display", "none");
    }
    $("#side-2").toggleClass("off")

});


$(".loan").click(function(event) {
    var page = "loan";
    if ($(this).parent().is('.lc')) {
        console.log("a1")
        SwitchPages(page, 1); //左
        $(".lc .on").removeClass("on")
        $(".lc .loan").toggleClass("on")
    } else {
        console.log("a2")
        SwitchPages(page, 2); //右
        $(".rc .on").removeClass("on")
        $(".rc .loan").toggleClass("on")
    }
});


$("body").delegate(".record", "click", function(e) {
    var page = "record";
    if ($(this).parent().is('.lc')) {
        console.log("a1")
        SwitchPages(page, 1); //左
        $(".lc .on").removeClass("on")
        $(".lc .record").toggleClass("on")


    } else {
        console.log("a2")
        SwitchPages(page, 2); //右
        $(".rc .on").removeClass("on")
        $(".rc .record").toggleClass("on")
    }


});

var el = document.getElementById("S2A2colume1");
var e2 = document.getElementById("S2A2colume2");
var e3 = document.getElementById("S2B201");
var e4 = document.getElementById("S2B202");
var e5 = document.getElementById("S2B203");
var e6 = document.getElementById("S2B204");
var e7 = document.getElementById("S2B6colume1");
var e8 = document.getElementById("S2B6colume2");
new ResizeSensor(jQuery('#S2A'), function() {
    if ($("#S2A").width() > 1000) {
        el.style.width = "60%";
        e2.style.width = "38%";
    }
    if ($("#S2A").width() < 1000) {
        el.style.width = "100%";
        e2.style.width = "100%";
    }
    if ($("#S2A").width() > 600) {
        e3.style.width = "15%";
        e4.style.width = "15%";
        e5.style.width = "15%";
        e6.style.width = "45%";
    }
    if ($("#S2A").width() < 600) {
        e3.style.width = "28%";
        e4.style.width = "28%";
        e5.style.width = "28%";
        e6.style.width = "90%";
    }
    if ($("#S2A").width() < 200) {
        e7.style.width = "90%";
        e8.style.width = "90%";
    } else if ($("#S2A").width() < 400) {
        e7.style.width = "50%";
        e8.style.width = "50%";
    }
    if ($("#S2A").width() > 400) {
        e7.style.width = "35%";
        e8.style.width = "60%";
    }
});
if ($("#S2A").width() > 1000) {
    el.style.width = "60%";
    e2.style.width = "38%";
}
if ($("#S2A").width() < 1000) {
    el.style.width = "100%";
    e2.style.width = "100%";
}
if ($("#S2A").width() > 600) {
    e3.style.width = "15%";
    e4.style.width = "15%";
    e5.style.width = "15%";
    e6.style.width = "45%";
}
if ($("#S2A").width() < 600) {
    e3.style.width = "30%";
    e4.style.width = "30%";
    e5.style.width = "30%";
    e6.style.width = "90%";
}
if ($("#S2A").width() < 200) {
    e7.style.width = "90%";
    e8.style.width = "90%";
} else if ($("#S2A").width() < 400) {
    e7.style.width = "50%";
    e8.style.width = "50%";
}
if ($("#S2A").width() > 400) {
    e7.style.width = "35%";
    e8.style.width = "60%";
}



/*section-3*/


/*section-4*/