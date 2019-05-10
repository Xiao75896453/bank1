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

$(".shrink1").click(function() {
    $("#lnPart1Content").slideToggle("slow");

});


function plusAndminus() {

}

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
        const newContentHtml = `      <div class="doc-apply">
        <div class="indexBar">
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
                    <div class="S2subrow S2topic" id="S2Atopic">
                        <p>業務人員申請內容</p>
                    </div>
                    <div class="S2subrow" id="S2Arow1">
                        <div class="S2A1item" id="S2A101">
                            <p class="S2A1title">業務員/單位 :</p>
                            <p class="S2A1content S2A1text">林銘洲/消金業務部</p>
                        </div>
                        <div class="S2A1item" id="S2A102">
                            <p class="S2A1title">核貸總金額 :</p>
                            <p class="S2A1content S2A1number">700000</p>
                        </div>
                    </div>
                    <div class="S2subrow" id="S2Arow2">
                        <div class="S2A2colume" id="S2A2colume1">
                            <div class="S2A2item" id="S2A201">
                                <img class="S2AAicon" src="assets//media//S2A01.png">
                                <p class="S2A2title">貸款產品</p>
                                <p class="S2A2content S2A2text">42信用貸款</p>
                            </div>
                            <div class="S2A2item" id="S2A202">
                                <img class="S2AAicon" src="assets//media//S2A02.png">
                                <p class="S2A2title">貸款金額</p>
                                <p class="S2A2content S2A2number">700000</p>
                            </div>
                            <div class="S2A2item" id="S2A203">
                                <img class="S2AAicon" src="assets//media//S2A03.png">
                                <p class="S2A2title">月付金</p>
                                <p class="S2A2content S2A2number">14514</p>
                            </div>
                            <div class="S2A2item" id="S2A204">
                                <img class="S2AAicon" src="assets//media//S2A04.png">
                                <p class="S2A2title">還款方式</p>
                                <p class="S2A2content S2A2text">平均攤還本息</p>
                            </div>
                            <div class="S2A2item" id="S2A207">
                                <img class="S2AAicon" src="assets//media//S2A05.png">
                                <p class="S2A2title">保證人提供</p>
                                <p class="S2A2content S2A2text">否</p>
                            </div>
                            <div class="S2A2item" id="S2A208">
                                <img class="S2AAicon" src="assets//media//S2A06.png">
                                <p class="S2A2title">風險性資產</p>
                                <p class="S2A2content S2A2number">522375</p>
                            </div>
                            <div class="S2A2item" id="S2A209">
                                <img class="S2AAicon" src="assets//media//S2A07.png">
                                <p class="S2A2title">資金用途別</p>
                                <p class="S2A2content S2A2text">家庭週轉金</p>
                            </div>
                            <div class="S2A2item" id="S2A210">
                                <img class="S2AAicon" src="assets//media//S2A08.png">
                                <p class="S2A2title">風險定價期數</p>
                                <p class="S2A2content S2A2text">豐利金一段式</p>
                            </div>
                        </div>
                        <div class="S2A2colume " id="S2A2colume2">
                            <div class="S2A2item1" id="S2A205">
                                <p class="S2A2title">風險定價</p>
                                <div class="S2A2icon1"><img class="S2AAicon1" src="assets//media//check.png"></div>
                            </div>
                            <div class="S2A2item1" id="S2A206">
                                <p class="S2A2title">風險權數</p>
                                <p class="S2A2content S2A2percemt">75</p>
                            </div>
                        </div>
                    </div>
                    <div class="S2subrow" id="S2Arow3">
                        <div class="S2A3colume" id="S2A3colume1">
                            <div class="S2A3item flex-fill" id="S2A301">
                                <p class="S2A3title">期數</p>
                                <p class="S2A3content">1-60</p>
                            </div>
                            <div class="S2A3item flex-fill" id="S2A302">
                                <p class="S2A3title">利率</p>
                                <p class="S2A3content">105個金放款/房貸指標(月)+7.89%，機動</p>
                            </div>
                        </div>
                        <div class="S2A3colume flex-fill" id="S2A3colume2">
                            <div class="S2A3item flex-fill" id="S2A303">
                                <p class="S2A3title">目前利率</p>
                                <p class="S2A3content">8.95%</p>
                            </div>
                            <div class="S2A3item flex-fill" id="S2A304">
                                <p class="S2A3title">CustType</p>
                                <p class="S2A3content">D</p>
                            </div>
                            <div class="S2A3item flex-fill" id="S2A305">
                                <p class="S2A3title">風險性資產</p>
                                <p class="S2A3content">522375</p>
                            </div>
                            <div class="S2A3item flex-fill" id="S2A306">
                                <p class="S2A3title">風險性資產比率</p>
                                <p class="S2A3content">74.6%</p>
                            </div>
                        </div>
                    </div>
                    <div class="S2subrow" id="S2Arow4">
                        <table border="1" class="tb-money table table-bordered dt-responsive nowrap">
                            <tr>
                                <th>+ A 放款利率</th>
                                <th colspan="3">- B 參考價格</th>
                                <th rowspan="2">= C 合理收益</th>
                                <th colspan="2">+ D 整體貢獻度說明</th>
                                <th colspan="4">= E 合理利潤</th>
                            </tr>
                            <tr>
                                <th>預定乘作利率(首年)</th>
                                <th>資金成本</th>
                                <th>營運成本</th>
                                <th>預期風險損失成本</th>
                                <th>手續費率</th>
                                <th>其他貢獻度</th>
                                <th>流動貼水</th>
                                <th>資本成本</th>
                                <th>其他</th>
                                <th>總利潤</th>
                            </tr>
                            <tr>
                                <td>8.95</td>
                                <td>0.534</td>
                                <td>0.271</td>
                                <td>0.271</td>
                                <td>5.805</td>
                                <td>1.143</td>
                                <td>0</td>
                                <td>0.312</td>
                                <td>0.638</td>
                                <td>5.998</td>
                                <td>6.948</td>
                            </tr>
                        </table>
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
                            <p class=" S2B1content">2019/04/16 15:34</p>
                        </div>
                    </div>
                    <div class="S2subrow" id="S2Brow2">
                        <div class="S2B2colume">
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
                        </div>
                        <div class="S2B2colume">
                            <div class="S2B2item" id="S2B204">
                                <p class="S2B2title">審核意見</p>
                                <p class="S2B2content S2B2text">55555</p>
                            </div>
                        </div>
                    </div>
                    <div class="S2subrow" id="S2Brow3">
                        <div class="S2B3colume" id="S2B3colume1">
                            <div class="S2B3item" id="S2B301">
                                <p class="S2B3title">貸款產品</p><input class="S2B3text" type="text">
                            </div>
                            <div class="S2B3item" id="S2B302">
                                <p class="S2B3title">提供保證人</p>
                            </div>
                            <div class="S2B3item" id="S2B303">
                                <p class="S2B3title">總期數</p><input class="S2B3text" type="text">
                            </div>
                        </div>
                        <div class="S2B3colume" id="S2B3colume2">
                            <div class="S2B3item" id="S2B304">
                                <p class="S2B3title">金額</p><input class="S2B3text" type="text">
                            </div>
                            <div class="S2B3item" id="S2B305">
                                <p class="S2B3title">可使用額度</p><input class="S2B3text" type="text">
                            </div>
                        </div>
                    </div>
                    <div class="S2subrow" id="S2Brow4">
                        <table border="1" class="tb-money table table-bordered dt-responsive nowrap">
                            <tr>
                                <th>+ A 放款利率</th>
                                <th colspan="3">- B 參考價格</th>
                                <th rowspan="2">= C 合理收益</th>
                                <th colspan="2">+ D 整體貢獻度說明</th>
                                <th colspan="4">= E 合理利潤</th>
                            </tr>
                            <tr>
                                <th>預定乘作利率(首年)</th>
                                <th>資金成本</th>
                                <th>營運成本</th>
                                <th>預期風險損失成本</th>
                                <th>手續費率</th>
                                <th>其他貢獻度</th>
                                <th>流動貼水</th>
                                <th>資本成本</th>
                                <th>其他</th>
                                <th>總利潤</th>
                            </tr>
                            <tr>
                                <td>8.95</td>
                                <td>0.534</td>
                                <td>0.271</td>
                                <td>0.271</td>
                                <td>5.805</td>
                                <td>1.143</td>
                                <td>0</td>
                                <td>0.312</td>
                                <td>0.638</td>
                                <td>5.998</td>
                                <td>6.948</td>
                            </tr>
                        </table>
                    </div>
                    <div class="S2subrow" id="S2Brow5">
                        <table border="1" class="tb-people table table-bordered dt-responsive nowrap">
                            <tr>
                                <th></th>
                                <th>姓名</th>
                                <th>單位</th>
                                <th>職稱</th>
                                <th>無擔金額(百萬)</th>
                                <th>授信合計(百萬)</th>
                                <th>本案無擔金額權限</th>
                                <th>本案金額權限</th>
                                <th>簽核日期</th>
                            </tr>
                            <tr>
                                <th>實際簽核</th>
                                <th>小藍</th>
                                <th>消金業務部</th>
                                <th>消金業務部推廣</th>
                                <th>(非核委)</th>
                                <th>企鵝</th>
                                <th rowspan="2">700000</th>
                                <th rowspan="2">700000</th>
                                <th rowspan="2">2019/04/22</th>
                            </tr>
                            <tr>
                                <td>簽核人員</td>
                                <td>小藍</td>
                                <td>消金業務部</td>
                                <td>消金業務部推廣</td>
                                <td>(非核委)</td>
                                <td>企鵝</td>
                            </tr>
                        </table>
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
                        <div class="S2B6colume flex-fill" id="S2B6colume2">
                            <div class="S2B6item1 flex-fill" id="S2B605">
                                <p class="S2B6title">建議額度</p>
                                <p class="S2B6content S2B7number">700000</p>
                            </div>
                            <div class="S2B6item1 flex-fill" id="S2B607">
                                <p class="S2B6title">風險性資產</p>
                                <p class="S2B6content">522375</p>
                            </div>
                            <div class="S2B6item1 flex-fill" id="S2B608">
                                <p class="S2B6title">風險性資產比率</p>
                                <p class="S2B6content">74.6%</p>
                            </div>
                        </div>
                    </div>
                    <div class="S2subrow" id="S2Brow7">
                        <table border="1" class="tb-comment table table-bordered dt-responsive nowrap">
                            <tr>
                                <td>調整核貸金額原因</td>
                                <th>111111111111111111111</th>
                            </tr>
                            <tr>
                                <td>審核意見</td>
                                <th>555555555555555555555</th>
                            </tr>
                        </table>
                    </div>
                    <div class="S2subrow" id="S2Brow8">
                        <div class="S2B8section">
                            <div class="S2B8colume" id="S2B8colume1">
                                <p class="S2B8title1">貸款產品</p><input class="S2B8content1 S2B8text" type="text">
                            </div>
                            <div class="S2B8colume" id="S2B8colume2">
                                <p class="S2B8title">連保</p>
                                <p class="S2B8title">一般</p>
                            </div>
                            <div class="S2B8colume" id="S2B8colume3">
                                <p class="S2B8title">金額</p><input class="S2B8content S2B8number" type="text">
                                <p class="S2B8title">可使用額度</p><input class="S2B8content S2B8number" type="text">
                            </div>
                            <div class="S2B8colume" id="S2B8colume4">
                                <p class="S2B8title">總期數</p><input class="S2B8content S2B8number" type="text">
                                <p class="S2B8title">展期次數</p><input class="S2B8content S2B8number" type="text">
                            </div>
                            <div class="S2B8colume" id="S2B8colume5">
                                <p class="S2B8title">利率</p>
                                <p class="S2B8content">pp</p>
                            </div>
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
                                <p class="S2B8content S2B8number">88</p>
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
                                <p class="S2B83title">第</p><input class="S2B83text" type="text">
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
                        <textarea class="S2B9text" cols="50" rows="4"></textarea>
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
                        <table border="1" class="tb-money table table-bordered dt-responsive nowrap">
                            <tr>
                                <th rowspan="2">關係人姓名</th>
                                <th rowspan="2">ID</th>
                                <th colspan="4">Score 13 評分模組</th>
                                <th colspan="3">Score 17 評分模</th>
                                <th rowspan="2">J10信用評分</th>
                                <th rowspan="2">信用等級</th>
                            </tr>
                            <tr>
                                <th>卡別</th>
                                <th>Score 13</th>
                                <th>Risk Grade</th>
                                <th>風險區隔</th>
                                <th>Score 17</th>
                                <th>Risk Grade</th>
                                <th>風險客群</th>
                            </tr>
                            <tr>
                                <td>何核核</td>
                                <td>LGG</td>
                                <td>卡一</td>
                                <td>443</td>
                                <td>6</td>
                                <td>高風險</td>
                                <td>413</td>
                                <td>7</td>
                                <td>D</td>
                                <td>499</td>
                                <td>A</td>
                            </tr>
                        </table>
                    </div>
                    <div class="S2subrow" id="S2Drow2">
                        <table border="1" class="tb-people table table-bordered dt-responsive nowrap">
                            <tr>
                                <th></th>
                                <th>姓名</th>
                                <th>單位</th>
                                <th>職稱</th>
                                <th>無擔金額(百萬)</th>
                                <th>授信合計(百萬)</th>
                                <th>本案無擔金額權限</th>
                                <th>本案金額權限</th>
                                <th>簽核日期</th>
                            </tr>
                            <tr>
                                <th>實際簽核</th>
                                <th>小藍</th>
                                <th>消金業務部</th>
                                <th>消金業務部推廣</th>
                                <th>(非核委)</th>
                                <th>企鵝</th>
                                <th rowspan="2">700000</th>
                                <th rowspan="2">700000</th>
                                <th rowspan="2">2019/04/22</th>
                            </tr>
                            <tr>
                                <td>簽核人員</td>
                                <td>小藍</td>
                                <td>消金業務部</td>
                                <td>消金業務部推廣</td>
                                <td>(非核委)</td>
                                <td>企鵝</td>
                            </tr>
                        </table>
                    </div>
                    <div class="S2subrow" id="S2Drow3">
                        <div class="S2D3colume" id="S2D3colume1">
                            <div class="S2D3item2" id="S2D301">
                                <p class="S2D3title">借貸人月收入</p><input class="S2D3text" type="text">
                            </div>
                            <div class="S2D3item2" id="S2D302">
                                <p class="S2D3title">建議額度</p><input class="S2D3text" type="text">
                            </div>
                        </div>
                        <div class="S2D3colume" id="S2D3colume2">
                            <div class="S2D3item2" id="S2D303">
                                <p class="S2D3title">本次核貸金額加計無擔外債為月收入金額約</p><input class="S2D3text" type="text">
                                <p class="S2D3unit">倍</p>
                            </div>
                            <div class="S2D3item2" id="S2D304">
                                <p class="S2D3title">全體金融機構之無擔飽受信總餘額(含本次)為年所得之</p><input class="S2D3text" type="text">
                                <p class="S2D3unit">%</p>
                            </div>
                        </div>
                        <div class="S2D3colume" id="S2D3colume3">
                            <div class="S2D3item2" id="S2D305">
                                <p class="S2D3title">本次貸款支出調整為</p><input class="S2D3text" type="text">
                            </div>
                            <div class="S2D3item2" id="S2D306">
                                <p class="S2D3title">致當月結餘金額為</p><input class="S2D3text" type="text">
                            </div>
                        </div>
                        <div class="S2D3colume" id="S2D3colume4">
                            <div class="S2D3item3" id="S2D307">
                                <p class="S2D3title">本次貸款支出/總月收入</p><input class="S2D3text" type="text">
                                <p class="S2D3unit">%</p>
                            </div>
                            <div class="S2D3item3" id="S2D308">
                                <p class="S2D3title">總貸款支出/總月收入</p><input class="S2D3text" type="text">
                                <p class="S2D3unit">%</p>
                            </div>
                            <div class="S2D3item3" id="S2D309">
                                <p class="S2D3title">總月支出/總月收入</p><input class="S2D3text" type="text">
                                <p class="S2D3unit">%</p>
                            </div>
                        </div>
                    </div>
                    <div class="S2subrow" id="S2Drow3-5">
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
                        <div class="S2tab">
                            <button class="tablinks" onclick="creatProduct(event, 'FirstProduct')">01</button> <button class="tablinks" onclick="creatProduct(event, 'SecondProduct')">02</button> <button class="tablinks" onclick="creatProduct(event, 'ThirdProduct')">03</button>
                        </div>
                        <div class="S2tabcontent" id="FirstProduct">
                            <div id="S2D4section2">
                                <div class="S2D42colume" id="S2D42colume1">
                                    <p class="S2D42title">貸款產品</p>
                                    <select name="請選擇">
                                                <option value="1">
                                                    1
                                                </option>
                                                <option value="1">
                                                    1
                                                </option>
                                                <option value="1">
                                                    1
                                                </option>
                                            </select>
                                </div>
                                <div class="S2D42colume" id="S2D42colume2">
                                    <p class="S2D42title">連保</p>
                                </div>
                                <div class="S2D42colume" id="S2D42colume3">
                                    <p class="S2D42title">一般</p>
                                </div>
                                <div class="S2D42colume" id="S2D42colume4">
                                    <p class="S2D42title">金額</p><input class="S2D42text" type="text">
                                </div>
                                <div class="S2D42colume" id="S2D42colume5">
                                    <p class="S2D42title">可使用額度</p><input class="S2D42text" type="text">
                                </div>
                                <div class="S2D42colume" id="S2D42colume6">
                                    <p class="S2D42title">總期數</p><input class="S2D42text" type="text">
                                </div>
                                <div class="S2D42colume" id="S2D42colume7">
                                    <p class="S2D42title">展期次數</p><input class="S2D42text" type="text">
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
                                </div>
                                <div class="S2D43colume" id="S2D43colume2">
                                    <p class="S2D43"></p>
                                    <p class="S2D43"></p>
                                </div>
                                <div class="S2D43colume" id="S2D43colume3">
                                    <p class="S2D4325">資金用途別</p>
                                    <select class="S2D4375" name="請選擇">
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                        </select>
                                    <p class="S2D4325">風險定價</p>
                                    <p class="S2D4325">風險定價期數</p>
                                    <select class="S2D4350" name="請選擇">
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                        </select>
                                </div>
                                <div class="S2D43colume" id="S2D43colume4">
                                    <p class="S2D4325">還款方式</p>
                                    <select class="S2D4375" name="請選擇">
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                        </select>
                                    <p class="S2D4325">風險權數</p>
                                    <p class="S2D4375">%</p>
                                </div>
                                <div class="S2D43colume" id="S2D43colume5">
                                    <p class="S2D4350">先收息期數</p><input class="S2D4350" type="text">
                                    <p class="S2D43"></p>
                                </div>
                                <table border="1" class="tb-product table table-nonbordered dt-responsive nowrap" id="S2D4section4">
                                    <tr>
                                        <th>
                                            <p>第</p><input class="S2D42text" type="text">
                                            <p>期起</p>
                                        </th>
                                        <th>固定</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>機動</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>
                                            <p>目前利率</p><input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p>第</p><input class="S2D42text" type="text">
                                            <p>期起</p>
                                        </th>
                                        <th>固定</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>機動</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>
                                            <p>目前利率</p><input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p>第</p><input class="S2D42text" type="text">
                                            <p>期起</p>
                                        </th>
                                        <th>固定</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>機動</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>
                                            <p>目前利率</p><input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="S2tabcontent" id="SecondProduct">
                            <div id="S2D4section2">
                                <div class="S2D42colume" id="S2D42colume1">
                                    <p class="S2D42title">貸款產品</p><select name="請選擇">
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                        </select>
                                </div>
                                <div class="S2D42colume" id="S2D42colume2">
                                    <p class="S2D42title">連保</p>
                                </div>
                                <div class="S2D42colume" id="S2D42colume3">
                                    <p class="S2D42title">一般</p>
                                </div>
                                <div class="S2D42colume" id="S2D42colume4">
                                    <p class="S2D42title">金額</p><input class="S2D42text" type="text">
                                </div>
                                <div class="S2D42colume" id="S2D42colume5">
                                    <p class="S2D42title">可使用額度</p><input class="S2D42text" type="text">
                                </div>
                                <div class="S2D42colume" id="S2D42colume6">
                                    <p class="S2D42title">總期數</p><input class="S2D42text" type="text">
                                </div>
                                <div class="S2D42colume" id="S2D42colume7">
                                    <p class="S2D42title">展期次數</p><input class="S2D42text" type="text">
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
                                </div>
                                <div class="S2D43colume" id="S2D43colume2">
                                    <p class="S2D43"></p>
                                    <p class="S2D43"></p>
                                </div>
                                <div class="S2D43colume" id="S2D43colume3">
                                    <p class="S2D4325">資金用途別</p><select class="S2D4375" name="請選擇">
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                        </select>
                                    <p class="S2D4325">風險定價</p>
                                    <p class="S2D4325">風險定價期數</p><select class="S2D4350" name="請選擇">
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                        </select>
                                </div>
                                <div class="S2D43colume" id="S2D43colume4">
                                    <p class="S2D4325">還款方式</p><select class="S2D4375" name="請選擇">
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                        </select>
                                    <p class="S2D4325">風險權數</p>
                                    <p class="S2D4375">%</p>
                                </div>
                                <div class="S2D43colume" id="S2D43colume5">
                                    <p class="S2D4350">先收息期數</p><input class="S2D4350" type="text">
                                    <p class="S2D43"></p>
                                </div>
                                <table border="1" class="tb-product table table-nonbordered dt-responsive nowrap" id="S2D4section4">
                                    <tr>
                                        <th>
                                            <p>第</p><input class="S2D42text" type="text">
                                            <p>期起</p>
                                        </th>
                                        <th>固定</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>機動</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>
                                            <p>目前利率</p><input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p>第</p><input class="S2D42text" type="text">
                                            <p>期起</p>
                                        </th>
                                        <th>固定</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>機動</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>
                                            <p>目前利率</p><input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p>第</p><input class="S2D42text" type="text">
                                            <p>期起</p>
                                        </th>
                                        <th>固定</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>機動</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>
                                            <p>目前利率</p><input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div class="S2tabcontent" id="ThirdProduct">
                            <div id="S2D4section2">
                                <div class="S2D42colume" id="S2D42colume1">
                                    <p class="S2D42title">貸款產品</p><select name="請選擇">
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                        </select>
                                </div>
                                <div class="S2D42colume" id="S2D42colume2">
                                    <p class="S2D42title">連保</p>
                                </div>
                                <div class="S2D42colume" id="S2D42colume3">
                                    <p class="S2D42title">一般</p>
                                </div>
                                <div class="S2D42colume" id="S2D42colume4">
                                    <p class="S2D42title">金額</p><input class="S2D42text" type="text">
                                </div>
                                <div class="S2D42colume" id="S2D42colume5">
                                    <p class="S2D42title">可使用額度</p><input class="S2D42text" type="text">
                                </div>
                                <div class="S2D42colume" id="S2D42colume6">
                                    <p class="S2D42title">總期數</p><input class="S2D42text" type="text">
                                </div>
                                <div class="S2D42colume" id="S2D42colume7">
                                    <p class="S2D42title">展期次數</p><input class="S2D42text" type="text">
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
                                </div>
                                <div class="S2D43colume" id="S2D43colume2">
                                    <p class="S2D43"></p>
                                    <p class="S2D43"></p>
                                </div>
                                <div class="S2D43colume" id="S2D43colume3">
                                    <p class="S2D4325">資金用途別</p><select class="S2D4375" name="請選擇">
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                        </select>
                                    <p class="S2D4325">風險定價</p>
                                    <p class="S2D4325">風險定價期數</p><select class="S2D4350" name="請選擇">
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                        </select>
                                </div>
                                <div class="S2D43colume" id="S2D43colume4">
                                    <p class="S2D4325">還款方式</p><select class="S2D4375" name="請選擇">
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                            <option value="1">
                                                1
                                            </option>
                                        </select>
                                    <p class="S2D4325">風險權數</p>
                                    <p class="S2D4375">%</p>
                                </div>
                                <div class="S2D43colume" id="S2D43colume5">
                                    <p class="S2D4350">先收息期數</p><input class="S2D4350" type="text">
                                    <p class="S2D43"></p>
                                </div>
                                <table border="1" class="tb-product table table-nonbordered dt-responsive nowrap" id="S2D4section4">
                                    <tr>
                                        <th>
                                            <p>第</p><input class="S2D42text" type="text">
                                            <p>期起</p>
                                        </th>
                                        <th>固定</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>機動</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>
                                            <p>目前利率</p><input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p>第</p><input class="S2D42text" type="text">
                                            <p>期起</p>
                                        </th>
                                        <th>固定</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>機動</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>
                                            <p>目前利率</p><input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>
                                            <p>第</p><input class="S2D42text" type="text">
                                            <p>期起</p>
                                        </th>
                                        <th>固定</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>機動</th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th><select name="請選擇">
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                    <option value="1">
                                                        1
                                                    </option>
                                                </select></th>
                                        <th>
                                            <input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                        <th>
                                            <p>目前利率</p><input class="S2D42text" type="text">
                                            <p>%</p>
                                        </th>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <!-- <p class="S2D4content S2D4choice" id="S2D401a">同業務人員</p>
    <p class="S2D4content S2D4choice" id="S2D401b">同模型</p>
    <p class="S2D4content S2D4choice" id="S2D401c">同核貸委員</p>
    <p class="S2D4content S2D4choice" id="S2D401d">自行輸入</p> -->
                    </div>
                </section>


            </div>




        </div>
    </div>
`;


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

function checkS2AWidth() {
    var el = document.getElementById("S2A2colume1");
    var e2 = document.getElementById("S2A2colume2");

    if ($(".left_div").width() > 1000) {
        el.style.width = "60%";
        e2.style.width = "38%";
        $("#S2A3colume1").removeClass("Width100");
        $('#S2B6colume1').removeClass("Width100");

    } else if ($(".left_div").width() < 1000) {
        el.style.width = "100%";
        e2.style.width = "100%";


        $("#S2A3colume1").addClass("Width100");
        $('#S2B6colume1').addClass("Width100");

    }
}
// new ResizeSensor(jQuery('.left_div'), function() {
//     console.log("ssdsdsds")
//     var el = document.getElementById("S2A2colume1");
//     var e2 = document.getElementById("S2A2colume2");
//     // if ($("#S2A").width() > 1300) {
//     //     el.style.width = "800px";
//     //     e2.style.width = "400px";
//     //     $("#SArow2").css("width", "1300px");
//     // } else if ($("#S2A").width() < 1300) {
//     //     el.style.width = "600px";
//     //     e2.style.width = "400px";
//     //     $("#SArow2").css("width", "1100px");
//     // } else if ($("#S2A").width() < 1100) {
//     //     el.style.width = "400px";
//     //     e2.style.width = "200px";
//     //     $("#SArow2").css("width", "700px");
//     // } else if ($("#S2A").width() < 840) {
//     //     el.style.width = "400px";
//     //     e2.style.width = "400px";
//     //     $("#SArow2").css("width", "500px");
//     // }

//     if ($(".left_div").width() > 1000) {
//         el.style.width = "60%";
//         e2.style.width = "38%";
//     } else if ($(".left_div").width() < 1000) {
//         el.style.width = "100%";
//         e2.style.width = "100%";
//     }

// });



$(".db-bt").click(function(event) {
    if ($("#side-2").hasClass("off")) {
        console.log("3");
        $("#side-2").css("display", "block");
    } else {

        // $(".rc .loan").toggleClass("on")
        $("#side-2").css("display", "none");
    }
    $("#side-2").toggleClass("off");
    checkS2AWidth();
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

function creatProduct(evt, page) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("S2tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(page).style.display = "block";
    evt.currentTarget.className += " active";
}

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

    checkS2AWidth();
});

// var el = document.getElementById("S2A2colume1");
// var e2 = document.getElementById("S2A2colume2");
// var e3 = document.getElementById("S2B201");
// var e4 = document.getElementById("S2B202");
// var e5 = document.getElementById("S2B203");
// var e6 = document.getElementById("S2B204");
// var e7 = document.getElementById("S2B6colume1");
// var e8 = document.getElementById("S2B6colume2");
// new ResizeSensor(jQuery('#S2A'), function() {
//     if ($("#S2A").width() > 1000) {
//         el.style.width = "60%";
//         e2.style.width = "38%";
//     }
//     if ($("#S2A").width() < 1000) {
//         el.style.width = "100%";
//         e2.style.width = "100%";
//     }
//     if ($("#S2A").width() > 600) {
//         e3.style.width = "15%";
//         e4.style.width = "15%";
//         e5.style.width = "15%";
//         e6.style.width = "45%";
//     }
//     if ($("#S2A").width() < 600) {
//         e3.style.width = "28%";
//         e4.style.width = "28%";
//         e5.style.width = "28%";
//         e6.style.width = "90%";
//     }
//     if ($("#S2A").width() < 200) {
//         e7.style.width = "90%";
//         e8.style.width = "90%";
//     } else if ($("#S2A").width() < 400) {
//         e7.style.width = "50%";
//         e8.style.width = "50%";
//     }
//     if ($("#S2A").width() > 400) {
//         e7.style.width = "35%";
//         e8.style.width = "60%";
//     }
// });
// if ($("#S2A").width() > 1000) {
//     el.style.width = "60%";
//     e2.style.width = "38%";
// }
// if ($("#S2A").width() < 1000) {
//     el.style.width = "100%";
//     e2.style.width = "100%";
// }
// if ($("#S2A").width() > 600) {
//     e3.style.width = "15%";
//     e4.style.width = "15%";
//     e5.style.width = "15%";
//     e6.style.width = "45%";
// }
// if ($("#S2A").width() < 600) {
//     e3.style.width = "30%";
//     e4.style.width = "30%";
//     e5.style.width = "30%";
//     e6.style.width = "90%";
// }
// if ($("#S2A").width() < 200) {
//     e7.style.width = "90%";
//     e8.style.width = "90%";
// } else if ($("#S2A").width() < 400) {
//     e7.style.width = "50%";
//     e8.style.width = "50%";
// }
// if ($("#S2A").width() > 400) {
//     e7.style.width = "35%";
//     e8.style.width = "60%";
// }



/*section-3*/

$("#S3r1i8").click(function() {
    $("#S3row2").slideToggle("slow");
    $("#section-2").slideToggle("slow");
});


  


/*section-4*/
