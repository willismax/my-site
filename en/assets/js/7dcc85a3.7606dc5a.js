"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[2832],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var l=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),m=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return l.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(a),d=n,c=u["".concat(o,".").concat(d)]||u[d]||k[d]||r;return a?l.createElement(c,i(i({ref:t},s),{},{components:a})):l.createElement(c,i({ref:t},s))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4902:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var l=a(7462),n=(a(7294),a(3905));const r={},i="Day 23 : \u6a21\u578b\u5206\u6790 TensorFlow Model Analysis (TFMA)",p={unversionedId:"2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u8ac7\u5be6\u8e10-\u5efa\u6a21 Modeling/Day 23",id:"2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u8ac7\u5be6\u8e10-\u5efa\u6a21 Modeling/Day 23",title:"Day 23 : \u6a21\u578b\u5206\u6790 TensorFlow Model Analysis (TFMA)",description:"tags: MLOps",source:"@site/docs/2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u8ac7\u5be6\u8e10-\u5efa\u6a21 Modeling/Day 23.md",sourceDirName:"2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u8ac7\u5be6\u8e10-\u5efa\u6a21 Modeling",slug:"/2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u8ac7\u5be6\u8e10-\u5efa\u6a21 Modeling/Day 23",permalink:"/my-site/en/docs/2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u8ac7\u5be6\u8e10-\u5efa\u6a21 Modeling/Day 23",draft:!1,editUrl:"https://github.com/willismax/my-site/blob/main/docs/2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u8ac7\u5be6\u8e10-\u5efa\u6a21 Modeling/Day 23.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Day 22 : \u6a21\u578b\u512a\u5316 - \u77e5\u8b58\u84b8\u993e Knowledge Distillation",permalink:"/my-site/en/docs/2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u8ac7\u5be6\u8e10-\u5efa\u6a21 Modeling/Day 22"},next:{title:"Day 24",permalink:"/my-site/en/docs/2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u8ac7\u5be6\u8e10-\u5efa\u6a21 Modeling/Day 24"}},o={},m=[{value:"tags: <code>MLOps</code>",id:"tags-mlops",level:6},{value:"\u6a21\u578b\u5206\u6790 TFMA \u4ecb\u7d39",id:"\u6a21\u578b\u5206\u6790-tfma-\u4ecb\u7d39",level:2},{value:"\u6a21\u578b\u5206\u6790 TFMA \u5be6\u4f5c",id:"\u6a21\u578b\u5206\u6790-tfma-\u5be6\u4f5c",level:2},{value:"1. \u5efa\u7acb TFMA \u74b0\u5883",id:"1-\u5efa\u7acb-tfma-\u74b0\u5883",level:3},{value:"2. \u8a2d\u7f6e\u548c\u57f7\u884c TFMA",id:"2-\u8a2d\u7f6e\u548c\u57f7\u884c-tfma",level:3},{value:"3. TFMA \u8996\u89ba\u5316\u6a21\u578b\u7e3e\u6548",id:"3-tfma-\u8996\u89ba\u5316\u6a21\u578b\u7e3e\u6548",level:3},{value:"4. \u8ffd\u8e64\u96a8\u8457\u6642\u9593\u63a8\u79fb\u7684\u6a21\u578b",id:"4-\u8ffd\u8e64\u96a8\u8457\u6642\u9593\u63a8\u79fb\u7684\u6a21\u578b",level:3},{value:"5. \u6a21\u578b\u9a57\u8b49",id:"5-\u6a21\u578b\u9a57\u8b49",level:3},{value:"\u5c0f\u7d50",id:"\u5c0f\u7d50",level:2},{value:"\u53c3\u8003",id:"\u53c3\u8003",level:2}],s={toc:m},u="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"day-23--\u6a21\u578b\u5206\u6790-tensorflow-model-analysis-tfma"},"Day 23 : \u6a21\u578b\u5206\u6790 TensorFlow Model Analysis (TFMA)"),(0,n.kt)("h6",{id:"tags-mlops"},"tags: ",(0,n.kt)("inlineCode",{parentName:"h6"},"MLOps")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/users/20121130/ironman/4015"},(0,n.kt)("img",{parentName:"a",src:"https://d1dwq032kyr03c.cloudfront.net/images/ironman_sticker/13/ai-and-data.png?sticker",alt:null,title:"\u7b2c 13 \u5c46\u9435\u4eba\u8cfd\u934a\u6210"}),"\u7b2c 13 \u5c46\u9435\u4eba\u8cfd\u934a\u6210"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10269467"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/iThome%E9%90%B5%E4%BA%BA%E8%B3%BD2021-%E5%A8%81%E5%88%A9%E6%96%AF-blue",alt:null}))),(0,n.kt)("h2",{id:"\u6a21\u578b\u5206\u6790-tfma-\u4ecb\u7d39"},"\u6a21\u578b\u5206\u6790 TFMA \u4ecb\u7d39"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u904e\u5f80\u6211\u5011\u95dc\u6ce8\u6a21\u578b\u7684\u8a13\u7df4\u7d50\u679c\uff0c\u6703\u8ffd\u8e64\u8a72\u6a21\u578b\u5728\u6bcf\u6b21 epochs \u4e4b\u5f8c\u7684 AUC \u3001 ACC\u3001 loss \u7b49\u6307\u6a19\u8b8a\u5316\uff0c\u4e26\u4e14\u4ee5\u8996\u89ba\u5316\u7e6a\u5716\u65b9\u5f0f\u5448\u73fe\u6a21\u578b\u9032\u5c55\uff0c\u6b64\u6642\u64c5\u9577\u5206\u6790\u8a72\u6a21\u578b\u72c0\u6cc1\u7684 TensorBoard \u5c31\u5f88\u597d\u7528\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/T2I6Ul0.png",alt:null})),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5716\u7247\u4f86\u6e90: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/zh-tw/visualstudio/ai/monitor-tensorboard?view=vs-2017"},"Azure \u4f7f\u7528 TensorBoard \u76e3\u8996"),"\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f46\u662f\uff0c\u5982\u679c\u8981\u6df1\u5165\u89c0\u5bdf\u6a21\u578b\u300c\u5404\u7248\u6b21\u300d\u7684\u72c0\u6cc1\u6642\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/tfx/guide/tfma"},"TensorFlow Model Analysis (TFMA)")," \u53ef\u4ee5\u8996\u89ba\u5316\u5206\u6790\u4e0d\u540c\u7248\u6b21\u7684\u6a21\u578b\u72c0\u6cc1\uff0c\u8b93\u60a8\u8a55\u4f30\u662f\u5426\u8b93\u65b0\u6a21\u578b\u66f4\u65b0\u4e0a\u7dda\uff0c\u800c\u4e0d\u662f\u628a\u7cdf\u7cd5\u7684\u6a21\u578b\u66ff\u4ee3\u539f\u672c\u7684\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"TFMA \u5728 TFX \u81ea\u52d5\u5316\u6d41\u7a0b\u4e2d\u5be6\u73fe\u7684\u7d44\u4ef6\u70ba ",(0,n.kt)("inlineCode",{parentName:"p"},"ExampleValidator"),"\uff0c\u8b93\u6a21\u578b\u8a13\u7df4\u5b8c\u9032\u884c\u6a21\u578b\u9a57\u8b49\uff0c\u9054\u5230\u6301\u7e8c\u8a13\u7df4\u7684\u76ee\u7684\uff0c\u7e8c\u63a5\u5b8c\u6210\u81ea\u52d5\u90e8\u7f72\u6a21\u578b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u66f4\u91cd\u8981\u7684\u662f\uff0c\u6a21\u578b\u9a57\u8b49\u975e\u5e38\u95dc\u5fc3\u6a21\u578b\u7684\u300c\u516c\u5e73\u6027\u300d\uff0c\u5584\u7528\u6a21\u578b\u5206\u6790\u5de5\u5177\u80fd\u6293\u51fa\u6a21\u578b\u5f31\u9ede\uff0c\u9032\u800c\u56de\u982d\u6539\u9032\u8cc7\u6599\u8207\u6a21\u578b\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://www.tensorflow.org/tfx/model_analysis/images/tfma-slicing-metrics-browser.gif",alt:null}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"TFMA \u53ef\u4ee5\u505a\u5230\u4ee5\u4e0b\u4efb\u52d9:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6839\u64da\u6574\u500b\u8a13\u7df4\u548c\u4fdd\u7559\u6578\u64da\u96c6\u8a08\u7b97\u7684\u6307\u6a19\uff0c\u4ee5\u6b21\u65e5\u7684\u8a55\u4f30\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u96a8\u6642\u9593\u8ddf\u8e64\u6307\u6a19\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e0d\u540c\u7279\u5fb5\u5207\u7247\u5206\u6790\u6a21\u578b\u6027\u80fd\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u9032\u884c\u6a21\u578b\u9a57\u8b49\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"TFMA \u7528\u4f86\u8a55\u4f30 TensorFlow \u6a21\u578b\u7684\u7a0b\u5f0f\u5eab\uff0c\u53ef\u642d\u914d TensorFlow \u4f86\u5efa\u7acb ",(0,n.kt)("inlineCode",{parentName:"p"},"EvalSavedModel")," \u505a\u70ba\u5206\u6790\u7684\u4f9d\u64da\u3002\u4f7f\u7528\u8005\u53ef\u900f\u904e\u9019\u500b\u7a0b\u5f0f\u5eab\uff0c\u4f7f\u7528\u8a13\u7df4\u7a0b\u5f0f\u4e2d\u5b9a\u7fa9\u7684\u76f8\u540c\u6307\u6a19\uff0c\u4ee5\u5206\u6563\u7684\u65b9\u5f0f\u8a55\u4f30\u5927\u91cf\u8cc7\u6599\u7684\u6a21\u578b\u3002\u9019\u4e9b\u6307\u6a19\u53ef\u6839\u64da\u4e0d\u540c\u7684\u8cc7\u6599\u7247\u6bb5\u904b\u7b97\u5f97\u51fa\uff0c\u4e26\u5728 Jupyter \u7b46\u8a18\u672c\u4e2d\u4ee5\u8996\u89ba\u5316\u7684\u65b9\u5f0f\u5448\u73fe\u3002"))),(0,n.kt)("h2",{id:"\u6a21\u578b\u5206\u6790-tfma-\u5be6\u4f5c"},"\u6a21\u578b\u5206\u6790 TFMA \u5be6\u4f5c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u672c\u7bc7\u5c07\u4ee5\u5b98\u65b9\u7bc4\u4f8b\u793a\u7bc4\uff0c\u60a8\u53ef\u4ee5\u8ddf\u8457\u4f7f\u7528 ",(0,n.kt)("a",{parentName:"li",href:"https://colab.research.google.com/github/tensorflow/tfx/blob/master/docs/tutorials/model_analysis/tfma_basic.ipynb#scrollTo=SA2E343NAMRF"},"Colab \u5be6\u4f5c\u7bc4\u4f8b ",(0,n.kt)("img",{parentName:"a",src:"https://i.imgur.com/pQnQ4tG.png",alt:null})),"\uff0c\u4f46\u56e0\u7bc4\u4f8b\u7565\u986f\u81c3\u816b\uff0c\u5efa\u8b70\u914d\u5408\u672c\u6587\u670d\u7528\u3002")),(0,n.kt)("h3",{id:"1-\u5efa\u7acb-tfma-\u74b0\u5883"},"1","."," \u5efa\u7acb TFMA \u74b0\u5883"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5b89\u88dd ",(0,n.kt)("inlineCode",{parentName:"p"},"tensorflow-model-analysis"),"\u3002"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6a21\u7d44\u9808\u91cd\u555f Colab \u57f7\u884c\u968e\u6bb5( Restart Runtime) \u518d\u57f7\u884c\u5f8c\u7e8c\u64cd\u4f5c\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# Upgrade pip to the latest, and install TFMA.\n!pip install -U pip\n!pip install tensorflow-model-analysis\n# Restart Runtime\n\n"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e0b\u8f09\u8cc7\u6599\u96c6"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u63a1\u7528\u829d\u52a0\u54e5\u5e02\u767c\u5e03\u7684",(0,n.kt)("a",{parentName:"li",href:"https://data.cityofchicago.org/Transportation/Taxi-Trips/wrvz-psew"},"\u829d\u52a0\u54e5\u8a08\u7a0b\u8eca\u884c\u7a0b\u8cc7\u6599\u96c6"),"\uff0c\u8cc7\u6599\u96c6\u5305\u542b23\u500b\u6b04\u4f4d\uff0c\u662f\u500b\u58d3\u7e2e\u6a94\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u89e3\u6790 Schema"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Schema \u6a94\u6848\u6e90\u81ea ",(0,n.kt)("a",{parentName:"li",href:"https://www.tensorflow.org/tfx/data_validation/"},"TFDV"),"\uff0c\u5982\u679c\u6c92\u6709\u7684\u8a71\u53ef\u4ee5\u53c3\u898b ",(0,n.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10263091"},"Day 14")," \u4ecb\u7d39\uff0c\u5c07\u624b\u4e0a\u6709\u7684\u8cc7\u6599\u96c6\u900f\u904e ",(0,n.kt)("inlineCode",{parentName:"li"},"tfdv.infer_schema")," \u7522\u751f\u53ca\u5b9a\u7fa9 Schema\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528 Schema \u5efa\u7acb TFRecords \u6a94\u6848"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u914d\u5408 TFMA \u8f38\u5165\u8cc7\u6599\u96c6\u683c\u5f0f ",(0,n.kt)("inlineCode",{parentName:"li"},"*.tfRecords"),"\uff0c\u9700\u64b0\u5beb\u7a0b\u5f0f\u5c07\u539f\u59cb\u8cc7\u6599",(0,n.kt)("inlineCode",{parentName:"li"},"data.csv")," \u8f49\u63db\u70ba\u7b26\u5408 Schema \u7684\u8cc7\u6599\u578b\u614b( int\u3001 float\u3001str)\u3001\u6578\u64da\u7bc4\u570d\u6a94\u6848\u5f15\u5165\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'\u7bc4\u4f8b\u4e2d\uff0c\u65b0\u589e "big_tipper" \u7279\u5fb5\u4ee5\u5e03\u6797\u503c\u8868\u793a\u5c0f\u8cbb\u662f\u5426\u5927\u65bc\u7968\u50f920%\u3002'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"*.csv")," \u8f49\u70ba ",(0,n.kt)("inlineCode",{parentName:"li"},"*.tfrecords")," \u7684\u51fd\u6578\u5b98\u65b9\u7bc4\u4f8b\u5df2\u5beb\u597d\u3002")))),(0,n.kt)("h3",{id:"2-\u8a2d\u7f6e\u548c\u57f7\u884c-tfma"},"2","."," \u8a2d\u7f6e\u548c\u57f7\u884c TFMA"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TFMA \u652f\u6301\u6a21\u578b\u985e\u578b\u53c3\u898b",(0,n.kt)("a",{parentName:"li",href:"https://www.tensorflow.org/tfx/model_analysis/get_started#model_types_supported"},"\u683c\u5f0f\u4ecb\u7d39"),"\uff0c\u5305\u542b ",(0,n.kt)("inlineCode",{parentName:"li"},"TF keras"),"\u3001\u57fa\u65bc TF2 \u7522\u751f\u7684 API \u3001 ",(0,n.kt)("inlineCode",{parentName:"li"},"tf.estimator")," \u3001 ",(0,n.kt)("inlineCode",{parentName:"li"},"pd.DataFrame")," \u7b49\u985e\u578b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6b64\u7bc4\u4f8b\u5c55\u793a ",(0,n.kt)("inlineCode",{parentName:"li"},"tf.keras")," \u6a21\u578b\u3001 ",(0,n.kt)("inlineCode",{parentName:"li"},"tf.estimator")," \u7b49 2 \u7a2e\u505a\u6cd5\u4f9b\u60a8\u53c3\u8003\uff0c\u4e26\u5206\u5225\u4fdd\u5b58\u70ba ",(0,n.kt)("inlineCode",{parentName:"li"},"EvalSavedModel")," \u3002"),(0,n.kt)("li",{parentName:"ul"},"TFMA \u652f\u63f4\u5728\u6a21\u578b\u8a13\u7df4\u671f\u9593\u7684\u8a55\u4f30\u6a21\u578b\u7e3e\u6548\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u63a5\u8457\u6b65\u9a5f\u70ba:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8a2d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"li"},"tfma.EvalConfig"),"\u3002",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5728\u6b64\u8a2d\u5b9a\u54ea\u500b\u6b04\u4f4d\u662f\u60a8\u7684y\u6a19\u7c64\uff0c\u8a55\u4f30\u6a5f\u68b0\u6642\u4f7f\u7528\u54ea\u4e9b\u6307\u6a19\uff0c\u6e96\u5099\u8981\u7522\u751f\u54ea\u4e9b\u89c0\u5bdf\u5207\u7247\u3002"))),(0,n.kt)("li",{parentName:"ul"},"\u8a2d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"li"},"tfma.EvalSharedModel")," \u3002"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"tfma.run_model_analysis")," \u5275\u5efa ",(0,n.kt)("inlineCode",{parentName:"li"},"tfma.EvalResult")," \uff0c\u5373\u53ef\u8996\u89ba\u5316\u5448\u73fe\u6a21\u578b\u7e3e\u6548\u3002")))),(0,n.kt)("h3",{id:"3-tfma-\u8996\u89ba\u5316\u6a21\u578b\u7e3e\u6548"},"3","."," TFMA \u8996\u89ba\u5316\u6a21\u578b\u7e3e\u6548"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"p"},"tfma.view.render_slicing_metrics()")," \u8996\u89ba\u5316\u5448\u73fe\u6a21\u578b\u7e3e\u6548\uff0c\u60a8\u53ef\u4ee5\u9078\u64c7\u60f3\u8981\u89c0\u5bdf\u7684\u5207\u7247\u3001\u5207\u63db\uff0c\u6b64\u7bc4\u4f8b ",(0,n.kt)("inlineCode",{parentName:"p"},"slicing_column='trip_start_hour'")," \u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/5RneSfu.gif",alt:null}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728\u5716\u8868\u4e2d:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Visualization \u53ef\u4ee5\u5207\u63db2\u7a2e\u6a23\u8c8c\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"Overview")," \u986f\u793a\u6bcf\u500b\u5207\u7247\uff0c",(0,n.kt)("inlineCode",{parentName:"li"},"Metrics Histogram")," \u662f\u5c07\u7d50\u679c\u5206\u6876\u986f\u793a\u3002"),(0,n.kt)("li",{parentName:"ul"},"Examples (Weighted) Threshold \u53ef\u4ee5\u8a2d\u5b9a\u986f\u793a\u7684\u9580\u6abb\u503c\uff0c\u8d85\u904e\u9580\u6abb\u503c\u624d\u6703\u986f\u793a\u3002"),(0,n.kt)("li",{parentName:"ul"},"Show \u6240\u5448\u73fe\u7684\u89c0\u5bdf\u6307\u6a19\u662f\u60a8\u5728 ",(0,n.kt)("inlineCode",{parentName:"li"},"tfma.EvalSharedModel")," \u6642\u8a2d\u7f6e\u7684\uff0c\u8996\u9700\u8981\u53ef\u589e\u6e1b\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u793a\u7bc4\u4e2d\u5c55\u793a\u4e86\u67d0\u4e9b\u6642\u6bb5 precision = 0\uff0c recall = 0 \u7684\u72c0\u6cc1\uff0c\u900f\u904e Sort \u66f4\u6e05\u695a\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u66f4\u591a\u7684\u5617\u8a66"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f8b\u5982\u66ff\u63db\u5207\u7247\u6b04\u4f4d 'slicing","_","column=trip","_","start_day' \u89c0\u5bdf\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4ea4\u53c9\u7d44\u5408\u89c0\u5bdf\u5207\u7247\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},"tfma.view.render_slicing_metrics(\n    eval_result,\n    slicing_spec=tfma.SlicingSpec(\n        feature_keys=['trip_start_hour', 'trip_start_day']))\n\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8a2d\u5b9a",(0,n.kt)("inlineCode",{parentName:"p"},"feature_values")," \u7be9\u9078\u7279\u5fb5\u503c\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},"tfma.view.render_slicing_metrics(\n    eval_result,\n    slicing_spec=tfma.SlicingSpec(\n        feature_keys=['trip_start_day'], \n        feature_values={'trip_start_hour': '12'}))\n\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/iC6aipy.gif",alt:null}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53e6\u5916\u4e5f\u6709 ",(0,n.kt)("inlineCode",{parentName:"p"},"tfma.view.render_plot")," \u986f\u793a\u6307\u5b9a\u5207\u7247\u8207\u89c0\u5bdf\u503c\uff0c\u52fe\u9078 Show all plots \u5f8c\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\u975e\u5e38\u8c50\u5bcc\u7684\u8996\u89ba\u5316\u5716\u8868\u3002",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://i.imgur.com/2fyDzJZ.gif",alt:null})))))),(0,n.kt)("h3",{id:"4-\u8ffd\u8e64\u96a8\u8457\u6642\u9593\u63a8\u79fb\u7684\u6a21\u578b"},"4","."," \u8ffd\u8e64\u96a8\u8457\u6642\u9593\u63a8\u79fb\u7684\u6a21\u578b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u60a8\u8a13\u7df4\u597d\u6a21\u578b\uff0c\u60a8\u6703\u5e0c\u671b\u6e2c\u8a66\u6a21\u578b\u6642\u4f7f\u7528\u751f\u7522\u60c5\u5883\u7522\u751f\u7684\uff0c\u7562\u7adf\u90a3\u624d\u662f\u6a21\u578b\u6703\u9047\u5230\u7684\u771f\u5be6\u53cd\u6620\u3002TFMA \u53ef\u4ee5\u5e6b\u52a9\u60a8\u6301\u7e8c\u76e3\u63a7\u8207\u8861\u91cf\u6a21\u578b\u6027\u80fd\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5148\u5132\u5b58\u5132\u5b58\u6bcf\u500b\u6a21\u578b\u8a55\u4f30\u7d50\u679c\uff0c\u7bc4\u4f8b\u5c55\u793a\u4e86t0\u65e5\u5230t2\u65e5\u7684\u8b8a\u5316\uff0c\u5728\u8996\u89ba\u5316\u5716\u8868\u4e2d\u9810\u8a2d\u986f\u793aAUC\uff0c\u60a8\u9084\u53ef\u4ee5\u65b0\u589e\u6bd4\u8f03\u5716\u3002",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("img",{parentName:"li",src:"https://i.imgur.com/Jh6kghm.gif",alt:null}))),(0,n.kt)("h3",{id:"5-\u6a21\u578b\u9a57\u8b49"},"5","."," \u6a21\u578b\u9a57\u8b49"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"TFMA \u53ef\u4ee5\u540c\u6642\u8a55\u4f30\u591a\u500b\u6a21\u578b\uff0c\u901a\u5e38\u662f\u6bd4\u8f03\u57fa\u672c\u6a21\u578b\u8207\u65b0\u6a21\u578b\u4e4b\u9593\u7684\u72c0\u6cc1\uff0c\u8b6c\u5982\u53ef\u4ee5\u9396\u5b9a\u65b0\u6a21\u578b\u7684 AUC \u7b49\u7e3e\u6548\u8981\u8d85\u904e Baseline\uff0c\u5728\u8a2d\u5b9a\u597d\u9580\u6abb\u503c\u5f8c\uff0c\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"p"},"tfma.ValidationResult")," \u67e5\u770b\u9a57\u8b49\u7d50\u679c\uff0c\u5982\u4f4e\u65bc\u9580\u6abb\u503c\u5247\u9a57\u8b49\u5931\u6557\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-python"},"validation_result = tfma.load_validation_result(validation_output_path)\nprint(validation_result.validation_ok)\n# False\n\n")))),(0,n.kt)("h2",{id:"\u5c0f\u7d50"},"\u5c0f\u7d50"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u672c\u7bc7\u8b93\u60a8\u5c0d TensorFlow Model Analysis (TFMA) \u5de5\u5177\u6709\u66f4\u591a\u7684\u8a8d\u8b58\uff0c\u9a57\u8b49\u96a8\u8457\u6642\u9593\u63a8\u79fb\u7684\u6a21\u578b\u5c0d\u65bc\u7528\u65bc\u6aa2\u6e2c\u5df2\u90e8\u7f72\u5728\u751f\u7522\u60c5\u5883\u7684\u6a21\u578b\u76f8\u7576\u91cd\u8981\uff0cTFMA \u8a2d\u8a08\u70ba\u53ef\u4ee5\u76f4\u63a5\u7522\u751f\u9a57\u8b49\u7d50\u679c\uff0c\u4e5f\u53ef\u4ee5\u8996\u89ba\u5316\u5448\u73fe\u3002\u8f03\u4e0d\u65b9\u4fbf\u7684\u662f\u9700\u8981\u6709 Schema \u53ca\u8a2d\u5b9a ",(0,n.kt)("inlineCode",{parentName:"li"},"tfma.EvalConfig")," \uff0c\u9019\u4e5f\u7b97\u662f TensorFlow \u6bd4\u8f03\u96e3\u4ee5\u89aa\u8fd1\u7684\u98a8\u683c\u5427\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5e0c\u671b\u80fd\u964d\u4f4e\u60a8\u4f7f\u7528 TFMA \u5de5\u5177\u7684\u9580\u6abb\uff0c\u76e1\u529b\u63a1\u7528 Gif \u5448\u73fe\uff0c\u518d\u4e0d\u884c\u8981\u62cd\u5f71\u7247\u4e86...\u3002",(0,n.kt)("br",{parentName:"li"}),(0,n.kt)("img",{parentName:"li",src:"https://ithelp.ithome.com.tw/images/emoticon/emoticon07.gif",alt:"/images/emoticon/emoticon07.gif"}))),(0,n.kt)("h2",{id:"\u53c3\u8003"},"\u53c3\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/zh-tw/visualstudio/ai/monitor-tensorboard?view=vs-2017"},"Azure \u4f7f\u7528 TensorBoard \u76e3\u8996")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.tensorflow.org/tfx/guide/tfma"},"TensorFlow Model Analysis (TFMA)"))))}k.isMDXComponent=!0}}]);