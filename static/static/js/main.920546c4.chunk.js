(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{37:function(t,n,e){t.exports=e(66)},66:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(26),i=e.n(o),u=e(27),c=e(28),l=e(32),d=e(29),h=e(8),p=e(33),g=e(3),f=e.n(g),s=e(2),b=e.n(s),x=e(34),v=e(5),m=e(6);function w(){var t=Object(v.a)(["\n\twidth: ",";\n\theight: ",";\n\tposition: relative;\n"]);return w=function(){return t},t}function C(){var t=Object(v.a)(["\n\tdisplay: flex;\n\tposition: absolute;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 100%;\n\twidth: 100%;\n"]);return C=function(){return t},t}var j=m.b.div(C()),k=m.b.div.attrs((function(t){return{width:t.width,height:t.height}}))(w(),(function(t){return t.width}),(function(t){return t.height})),O=function(t){var n=t.width,e=t.height,r=t.children,o=Object(x.a)(t,["width","height","children"]);return n=n||"auto",e=e||"auto",a.a.createElement(j,o,a.a.createElement(k,{width:n,height:e},r))},S=e(4),M=e.n(S);function y(){var t=Object(v.a)(["\n\tmargin-top: 0;\n"]);return y=function(){return t},t}function E(){var t=Object(v.a)(["\n\t\tbackground-color: ",";\n\t\tcolor: ",";\n\t\tcursor: default;\n\t\tbox-shadow: none;\n\t\tpointer-events: none;\n\t"]);return E=function(){return t},t}function z(){var t=Object(v.a)(["\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\theight: ",";\n\twidth: calc("," - 2*",");\n\tvertical-align: middle;\n\t\n\tmargin: "," ",";\n\tpadding: 0 ",";\n\n\tborder-radius: 2px;\n\tbox-shadow: \n\t\trgba(0, 0, 0, 0.14) 0px 2px 2px 0px, \n\t\trgba(0, 0, 0, 0.12) 0px 3px 1px -2px, \n\t\trgba(0, 0, 0, 0.2) 0px 1px 5px 0px;\n\n\tfont-size: 14px;\n\tletter-spacing: 0.5px;\n\tline-height: ",";\n\tcolor: ",";\n\ttext-align: center;\n\ttext-transform: uppercase;\n\toverflow: hidden;\n\n\tcursor: pointer;\n\tuser-select: none;\n\t\n\ttransition: 0.375s;\n\n\t&:hover{\n\t\tbox-shadow: \n\t\t\trgba(0, 0, 0, 0.14) 0px 3px 3px 0px,\n\t\t\trgba(0, 0, 0, 0.12) 0px 1px 7px 0px,\n\t\t\trgba(0, 0, 0, 0.2) 0px 3px 1px -1px;\n\t}\n\t\n\tbackground-color:",";\n\t\n\t","\n"]);return z=function(){return t},t}var G=m.b.div.attrs((function(t){var n=t.hMargin||t.margin||"10pt",e=t.vMargin||t.margin||"10pt";return/[0-9]$/.test(n)&&(n+="px"),/[0-9]$/.test(e)&&(e+="px"),{height:"36px",width:t.width,hMargin:n,vMargin:e,padding:"10pt",bgColor:t.color,txtColor:t.textColor}}))(z(),(function(t){return t.height}),(function(t){return t.width}),(function(t){return t.hMargin}),(function(t){return t.vMargin}),(function(t){return t.hMargin}),(function(t){return t.padding}),(function(t){return t.height}),(function(t){return t.txtColor}),(function(t){return t.bgColor}),(function(t){return t.disabled&&Object(m.a)(E(),b.a.lightGrey,b.a.darkGrey)}));G.NoTopMargin=Object(m.b)(G)(y()),G.propTypes={color:M.a.string,textColor:M.a.string,disabled:M.a.bool,margin:M.a.number,hMargin:M.a.number,vMargin:M.a.number},G.defaultProps={color:b.a.blue,textColor:b.a.white,disabled:!1,width:"100%"};var J=G,T=function(t){function n(t){var e;return Object(u.a)(this,n),(e=Object(l.a)(this,Object(d.a)(n).call(this,t))).state={detecting:null,ch1:null,ch2:null},e.updateSelf=e.updateSelf.bind(Object(h.a)(e)),e}return Object(p.a)(n,t),Object(c.a)(n,[{key:"componentDidMount",value:function(){f.a.defaults.baseURL="http://192.168.43.139/",this.updateSelf()}},{key:"updateSelf",value:function(){var t=this;f.a.get("/detection").then((function(n){return t.setState({detecting:n.data.status})})),f.a.get("/gpio/1").then((function(n){return t.setState({ch1:n.data.status})})),f.a.get("/gpio/2").then((function(n){return t.setState({ch2:n.data.status})}))}},{key:"render",value:function(){var t=this,n=this.state,e=n.detecting,r=n.ch1,o=n.ch2;return a.a.createElement(O,null,a.a.createElement(J,{color:e?b.a.red:b.a.green,onClick:function(){f.a.get("/detection/"+(e?"off":"on")).then(t.updateSelf)}},e?"Stop":"Start"," detection"),a.a.createElement(J,{onClick:function(){return f.a.get("/gpio/1/pulse?duration=5")}},"Ch1 pulse"),a.a.createElement(J,{color:r?b.a.red:b.a.green,onClick:function(){f.a.get("/gpio/1/"+(e?"off":"on")).then(t.updateSelf)}},"Ch1 on/off"),a.a.createElement(J,{onClick:function(){return f.a.get("/gpio/2/pulse?duration=5")}},"Ch2 pulse"),a.a.createElement(J,{color:o?b.a.red:b.a.green,onClick:function(){f.a.get("/gpio/2/"+(e?"off":"on")).then(t.updateSelf)}},"Ch2 on/off"))}}]),n}(a.a.Component);i.a.render(a.a.createElement(T,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.920546c4.chunk.js.map