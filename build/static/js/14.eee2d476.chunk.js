(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{330:function(e,a,t){e.exports={detail_container:"Detail_detail_container__3w271",header:"Detail_header__2xg0X",content:"Detail_content__NyX90",title:"Detail_title__OS0OX",carousel_img:"Detail_carousel_img__2BmBq",smallImg_box:"Detail_smallImg_box__29sWD",go_left:"Detail_go_left__2om9j",go_right:"Detail_go_right__2aiM7",smallImg_container:"Detail_smallImg_container__2S0vg",samllImg_item:"Detail_samllImg_item__XE4d5",info_box:"Detail_info_box__2hX1F",top_info:"Detail_top_info__1t790",price:"Detail_price__26LI2",num:"Detail_num__W8wba",type:"Detail_type__21NpO",bottom_info:"Detail_bottom_info__3x488",row:"Detail_row__3sgAT",name:"Detail_name__21-Po",data:"Detail_data__2_5jP"}},337:function(e,a,t){"use strict";t.r(a);t(282);var l=t(286),n=(t(153),t(102)),i=(t(154),t(68)),s=(t(277),t(276)),c=(t(155),t(27)),o=t(47),r=t(48),m=t(50),_=t(49),u=t(30),d=t(51),g=t(0),h=t.n(g),p=t(35),f=t(41),E=t(139),v=t(330),N=t.n(v),b=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(_.a)(a).call(this,e))).state={name:""},t.goLeft=t.goLeft.bind(Object(u.a)(t)),t.goRight=t.goRight.bind(Object(u.a)(t)),t.showPrice=t.showPrice.bind(Object(u.a)(t)),t.handleChangeCarousel=t.handleChangeCarousel.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,left:0,behavior:"smooth"});var e,a=JSON.parse(this.props.match.params.data),t=a.type,l=a.id;switch(t){case"newHouse":e="\u65b0\u623f";break;case"twoHand":e="\u4e8c\u624b\u623f";break;case"rent":e="\u79df\u623f"}this.setState({name:e}),this.props.getDetail(t,l)}},{key:"render",value:function(){var e=this,a=this.props.detail;return h.a.createElement("div",{className:[N.a.detail_container]+" detail_container"},h.a.createElement(n.a,{type:"flex",align:"middle",className:N.a.header},h.a.createElement(i.a,{span:14,offset:2},h.a.createElement(s.a,{separator:">"},h.a.createElement(s.a.Item,null,h.a.createElement(c.a,{type:"home"}),"\u5927\u6cc9\u5dde\u623f\u5730\u4ea7"),h.a.createElement(s.a.Item,null,this.state.name),h.a.createElement(s.a.Item,null,"\u8be6\u60c5")))),h.a.createElement(n.a,{className:N.a.content},h.a.createElement(i.a,{span:13,offset:1},h.a.createElement("div",{className:[N.a.title]},a.get("Name")),h.a.createElement(l.a,{autoplay:!0,ref:function(a){return e.carousel=a}},a.get("ImgList").map(function(e,a){return h.a.createElement("div",{key:a},h.a.createElement("img",{src:e.get("url"),alt:"",className:N.a.carousel_img}))})),h.a.createElement("div",{className:N.a.smallImg_box},h.a.createElement("div",{className:N.a.go_left,onClick:this.goLeft}),h.a.createElement("ul",{className:[N.a.smallImg_container],ref:function(a){e.ul=a}},a.get("ImgList").map(function(a,t){return h.a.createElement("li",{key:t,className:[N.a.samllImg_item],onClick:function(){return e.handleChangeCarousel(t)}},h.a.createElement("img",{src:a.get("url"),alt:""}))})),h.a.createElement("div",{className:N.a.go_right,onClick:this.goRight}))),h.a.createElement(i.a,{span:7,offset:1,className:N.a.info_box},h.a.createElement("div",{className:N.a.top_info},this.showPrice(a),a.get("HouseUseType").map(function(e,a){return h.a.createElement("div",{className:N.a.type,key:a},e)})),h.a.createElement("div",{className:N.a.bottom_info},h.a.createElement("div",{className:N.a.row},h.a.createElement("div",{className:N.a.name},"\u9879\u76ee\u5730\u5740:"),h.a.createElement("div",{className:N.a.data,style:{WebkitBoxOrient:"vertical"}},a.get("Addr"))),h.a.createElement("div",{className:N.a.row},h.a.createElement("div",{className:N.a.name},"\u6700\u65b0\u5f00\u76d8:"),h.a.createElement("div",{className:N.a.data},a.get("SaleTime"))),h.a.createElement("div",{className:N.a.row},h.a.createElement("div",{className:N.a.name},"\u8054\u7cfb\u7535\u8bdd:"),h.a.createElement("div",{className:N.a.data},a.get("Mobile"))),h.a.createElement("div",{className:N.a.row},h.a.createElement("div",{className:N.a.name},"\u88c5\u4fee:"),h.a.createElement("div",{className:N.a.data},a.get("Decoration")))))))}},{key:"handleChangeCarousel",value:function(e){this.carousel.goTo(e,!0)}},{key:"showPrice",value:function(e){switch(this.props.match.params.type){case"newHouse":return h.a.createElement("div",{className:N.a.price},h.a.createElement("span",{className:N.a.num},e.get("average")),"\u5143/\u5e73(\u5747\u4ef7)");case"twoHand":return h.a.createElement("div",{className:N.a.price},h.a.createElement("span",{className:N.a.num},e.get("Price")),"\u4e07\u5143");case"rent":return h.a.createElement("div",{className:N.a.price},h.a.createElement("span",{className:N.a.num},e.get("MonthlyRent")),"\u5143/\u6708")}}},{key:"goLeft",value:function(){this.ul.scrollTo({top:0,left:this.ul.scrollLeft-130,behavior:"smooth"})}},{key:"goRight",value:function(){this.ul.scrollTo({top:0,left:130+this.ul.scrollLeft,behavior:"smooth"})}}]),a}(h.a.Component);a.default=Object(p.b)(function(e){return{detail:e.getIn(["detail","detail"])}},function(e){return{getDetail:function(a,t){console.log("type\u662f:"+a+"\uff0cid\u662f"+t),e(E.a.getDetail(a,t))}}})(Object(f.e)(b))}}]);
//# sourceMappingURL=14.eee2d476.chunk.js.map