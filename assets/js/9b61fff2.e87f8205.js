"use strict";(self.webpackChunkmy_site=self.webpackChunkmy_site||[]).push([[893],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),_=r,m=p["".concat(l,".").concat(_)]||p[_]||u[_]||s;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=_;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}_.displayName="MDXCreateElement"},180:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const s={jupyter:{jupytext:{text_representation:{extension:".md",format_name:"markdown",format_version:"1.3",jupytext_version:"1.15.1"}},kernelspec:{display_name:"Python 3",name:"python3"}}},o=void 0,i={unversionedId:"2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u5be6\u4f5cNotebooks/\u7279\u5fb5\u9078\u64c7_Deta_Selection_\u9435\u4eba\u8cfd\u793a\u7bc4_",id:"2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u5be6\u4f5cNotebooks/\u7279\u5fb5\u9078\u64c7_Deta_Selection_\u9435\u4eba\u8cfd\u793a\u7bc4_",title:"\u7279\u5fb5\u9078\u64c7_Deta_Selection_\u9435\u4eba\u8cfd\u793a\u7bc4_",description:"- \u6b64\u70baithome\u9435\u4eba\u8cfd Day17\u7a0b\u5f0f\u5be6\u4f5c\u7bc4\u4f8b\uff0c\u8cc7\u6599\u96c6\u70ba\u7d93\u6574\u7406\u904e\u5f8c\u8f03\u7c21\u6613\u7684\u9435\u9054\u5c3c\u865f\u8cc7\u6599\u96c6\uff0cModel\u4e3b\u8981\u4ee5sklearn.ensemble.RandomForestClassifier\u9032\u884c\u793a\u7bc4\uff0c\u7a0b\u5f0f\u78bc\u53c3\u8003Machine Learning Data Lifecycle in Production\u8ab2\u7a0b\uff0c\u5b83\u662fMachine Learning Engineering for Production (MLOps) \u5c08\u9805\u8ab2\u7a0b\u5176\u4e2d\u4e00\u90e8\u5206\u3002",source:"@site/docs/2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u5be6\u4f5cNotebooks/17.\u7279\u5fb5\u9078\u64c7_Deta_Selection_\u9435\u4eba\u8cfd\u793a\u7bc4_.md",sourceDirName:"2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u5be6\u4f5cNotebooks",slug:"/2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u5be6\u4f5cNotebooks/\u7279\u5fb5\u9078\u64c7_Deta_Selection_\u9435\u4eba\u8cfd\u793a\u7bc4_",permalink:"/my-site/docs/2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u5be6\u4f5cNotebooks/\u7279\u5fb5\u9078\u64c7_Deta_Selection_\u9435\u4eba\u8cfd\u793a\u7bc4_",draft:!1,editUrl:"https://github.com/willismax/my-site/blob/main/docs/2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u5be6\u4f5cNotebooks/17.\u7279\u5fb5\u9078\u64c7_Deta_Selection_\u9435\u4eba\u8cfd\u793a\u7bc4_.md",tags:[],version:"current",sidebarPosition:17,frontMatter:{jupyter:{jupytext:{text_representation:{extension:".md",format_name:"markdown",format_version:"1.3",jupytext_version:"1.15.1"}},kernelspec:{display_name:"Python 3",name:"python3"}}},sidebar:"tutorialSidebar",previous:{title:"Snorkel_\u8996\u89ba\u95dc\u4fc2\u6aa2\u6e2cVRD\u7bc4\u4f8b",permalink:"/my-site/docs/2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u5be6\u4f5cNotebooks/Snorkel_\u8996\u89ba\u95dc\u4fc2\u6aa2\u6e2cVRD\u7bc4\u4f8b"},next:{title:"Keras_Tuner_\u9435\u4eba\u8cfd\u5206\u4eab",permalink:"/my-site/docs/2021ITHome\u9435\u4eba\u8cfd\u300c\u5f9eAI\u843d\u5730\u8ac7MLOps\u300d/\u5be6\u4f5cNotebooks/Keras_Tuner_\u9435\u4eba\u8cfd\u5206\u4eab"}},l={},c=[{value:"\u4e0b\u8f09\u53ca\u6574\u7406\u8cc7\u6599",id:"\u4e0b\u8f09\u53ca\u6574\u7406\u8cc7\u6599",level:2},{value:"\u5b9a\u7fa9\u8a55\u4f30\u6a21\u578b",id:"\u5b9a\u7fa9\u8a55\u4f30\u6a21\u578b",level:2},{value:"\u5168\u7279\u5fb5\u539f\u59cb\u6210\u6548",id:"\u5168\u7279\u5fb5\u539f\u59cb\u6210\u6548",level:3},{value:"\u904e\u6ffe\u65b9\u6cd5 Filter Method",id:"\u904e\u6ffe\u65b9\u6cd5-filter-method",level:2},{value:"\u4f9d\u95dc\u806f\u6027\u79fb\u9664\u7279\u5fb5",id:"\u4f9d\u95dc\u806f\u6027\u79fb\u9664\u7279\u5fb5",level:3},{value:"\u55ae\u8b8a\u91cf\u7279\u5fb5\u9078\u53d6 Univariate Selection",id:"\u55ae\u8b8a\u91cf\u7279\u5fb5\u9078\u53d6-univariate-selection",level:3},{value:"\u5305\u88dd\u65b9\u6cd5 Wrapper Method",id:"\u5305\u88dd\u65b9\u6cd5-wrapper-method",level:2},{value:"\u905e\u8ff4\u7279\u5fb5\u6d88\u9664 Recursive feature elimination (RFE)",id:"\u905e\u8ff4\u7279\u5fb5\u6d88\u9664-recursive-feature-elimination-rfe",level:3},{value:"\u5d4c\u5165\u65b9\u6cd5 Embedded Method",id:"\u5d4c\u5165\u65b9\u6cd5-embedded-method",level:2},{value:"\u91cd\u8981\u7279\u5fb5 Feature importance",id:"\u91cd\u8981\u7279\u5fb5-feature-importance",level:3},{value:"L1\u6b63\u898f\u5316 L1 regularization",id:"l1\u6b63\u898f\u5316-l1-regularization",level:3},{value:"\u8a55\u4f30\u5c0f\u7d50",id:"\u8a55\u4f30\u5c0f\u7d50",level:2},{value:"\u53c3\u8003",id:"\u53c3\u8003",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{href:"https://colab.research.google.com/github/willismax/ML-in-Production-30-days-sharing/blob/main/notebook/17.%E7%89%B9%E5%BE%B5%E9%81%B8%E6%93%87_Deta_Selection_%E9%90%B5%E4%BA%BA%E8%B3%BD%E7%A4%BA%E7%AF%84_.ipynb",target:"_parent"},(0,r.kt)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})),(0,r.kt)("h1",{id:"17\u7279\u5fb5\u9078\u64c7"},"17.\u7279\u5fb5\u9078\u64c7"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6b64\u70ba",(0,r.kt)("a",{parentName:"li",href:"https://ithelp.ithome.com.tw/articles/10264846"},"ithome\u9435\u4eba\u8cfd Day17"),"\u7a0b\u5f0f\u5be6\u4f5c\u7bc4\u4f8b\uff0c\u8cc7\u6599\u96c6\u70ba\u7d93\u6574\u7406\u904e\u5f8c\u8f03\u7c21\u6613\u7684",(0,r.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/duxuhao/Feature-Selection/master/example/titanic/clean_train.csv"},"\u9435\u9054\u5c3c\u865f\u8cc7\u6599\u96c6"),"\uff0cModel\u4e3b\u8981\u4ee5",(0,r.kt)("inlineCode",{parentName:"li"},"sklearn.ensemble.RandomForestClassifier"),"\u9032\u884c\u793a\u7bc4\uff0c\u7a0b\u5f0f\u78bc\u53c3\u8003",(0,r.kt)("a",{parentName:"li",href:"https://www.coursera.org/learn/machine-learning-data-lifecycle-in-production"},"Machine Learning Data Lifecycle in Production"),"\u8ab2\u7a0b\uff0c\u5b83\u662f",(0,r.kt)("a",{parentName:"li",href:"https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops"},"Machine Learning Engineering for Production (MLOps) \u5c08\u9805\u8ab2\u7a0b"),"\u5176\u4e2d\u4e00\u90e8\u5206\u3002")),(0,r.kt)("h2",{id:"\u4e0b\u8f09\u53ca\u6574\u7406\u8cc7\u6599"},"\u4e0b\u8f09\u53ca\u6574\u7406\u8cc7\u6599"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'id="I9_O6c_BfaaK"',id:'"I9_O6c_BfaaK"'},"import pandas as pd\nimport numpy as np\n\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.feature_selection import RFE, SelectKBest, SelectFromModel, chi2, f_classif\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score, roc_auc_score, precision_score, recall_score, f1_score\nfrom sklearn.svm import LinearSVC\nfrom sklearn.feature_selection import SelectFromModel\nfrom sklearn.preprocessing import StandardScaler, MinMaxScaler\n\nimport seaborn as sns\nimport matplotlib\nimport matplotlib.pyplot as plt\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'id="9M-AmPMEg8f1" colab={"base_uri": "https://localhost:8080/"} outputId="8cae813f-bec7-4e7c-fe10-c4b91b3fabc6"',id:'"9M-AmPMEg8f1"',colab:'{"base_uri":','"https://localhost:8080/"}':!0,outputId:'"8cae813f-bec7-4e7c-fe10-c4b91b3fabc6"'},"# \u4e0b\u8f09\u9435\u9054\u5c3c\u865f\u8cc7\u6599\u96c6\n!wget -O data.csv https://raw.githubusercontent.com/duxuhao/Feature-Selection/master/example/titanic/clean_train.csv\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/", "height": 458} id="U7I98NsTfl61" outputId="66dab21f-91a1-4912-b49b-4cd34c8cac68"',colab:'{"base_uri":','"https://localhost:8080/",':!0,'"height":':!0,"458}":!0,id:'"U7I98NsTfl61"',outputId:'"66dab21f-91a1-4912-b49b-4cd34c8cac68"'},"df = pd.read_csv('data.csv')\ndf.describe(include='all')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/"} id="Fn_I71dPjLzz" outputId="5fc2a5b5-a6da-45ad-f79a-b915da30726a"',colab:'{"base_uri":','"https://localhost:8080/"}':!0,id:'"Fn_I71dPjLzz"',outputId:'"5fc2a5b5-a6da-45ad-f79a-b915da30726a"'},"# \u78ba\u8a8d\u6709\u7121\u7f3a\u5931\u503c\ndf.isna().sum()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'id="Py961eVPl_31" colab={"base_uri": "https://localhost:8080/"} outputId="2a2089ab-615b-467d-a519-c8e249ff3690"',id:'"Py961eVPl_31"',colab:'{"base_uri":','"https://localhost:8080/"}':!0,outputId:'"2a2089ab-615b-467d-a519-c8e249ff3690"'},'# \u7279\u5fb5\u5de5\u7a0b (One-hot encoding)\ndf = pd.concat(\n    [df,pd.get_dummies(df["Title"])], \n    axis=1\n    )\ndf = df.drop("Title", 1)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'id="1-VSmat5lWLg" colab={"base_uri": "https://localhost:8080/"} outputId="90366ca3-8f33-4cbf-e425-179f2212b350"',id:'"1-VSmat5lWLg"',colab:'{"base_uri":','"https://localhost:8080/"}':!0,outputId:'"90366ca3-8f33-4cbf-e425-179f2212b350"'},'# \u5207\u5206\u7279\u5fb5X\u8207\u6a19\u7c64Y\nX = df.drop("Survived", 1)\nY = df["Survived"]\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/", "height": 206} id="6_dxMV_llzaL" outputId="455f20ed-2560-4975-ae92-0bda72e3b0f1"',colab:'{"base_uri":','"https://localhost:8080/",':!0,'"height":':!0,"206}":!0,id:'"6_dxMV_llzaL"',outputId:'"455f20ed-2560-4975-ae92-0bda72e3b0f1"'},"X.head()\n")),(0,r.kt)("h2",{id:"\u5b9a\u7fa9\u8a55\u4f30\u6a21\u578b"},"\u5b9a\u7fa9\u8a55\u4f30\u6a21\u578b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u672c\u7bc4\u4f8b\u63a1\u5177\u6709\u968e\u5c64\u6027\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"sklearn.ensemble.RandomForestClassifier"),"\u8a13\u7df4\u8cc7\u6599\uff0c\u8a55\u4f30\u7d50\u679c\u70ba\u9a57\u8b49\u8cc7\u6599\u96c6\u7684metrics\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'id="UXuQpVEN1F9j"',id:'"UXuQpVEN1F9j"'},"def use_RandomForestClassifier_evaluation_metrics_on_test_set(X,Y):\n    X_train, X_test, Y_train, Y_test = train_test_split(\n        X, Y, test_size = 0.2 ,stratify=Y, random_state = 9527)\n\n    # \u6a19\u6e96\u5316\n    scaler = StandardScaler().fit(X_train)\n    X_train_scaled = scaler.transform(X_train)\n    X_test_scaled = scaler.transform(X_test)\n\n    # RandomForestClassifier\u8a13\u7df4\u6a21\u578b\n    model = RandomForestClassifier(criterion='entropy', random_state=9527)\n    model.fit(X_train_scaled, Y_train)\n\n    # \u9810\u6e2c\n    y_predict_result = model.predict(X_test_scaled)\n\n    # \u56de\u50b3evaluation_metrics_on_test_set\n    return {\n        'accuracy' : accuracy_score(Y_test, y_predict_result),\n        'roc' : roc_auc_score(Y_test, y_predict_result),\n        'precision' : precision_score(Y_test, y_predict_result),\n        'recall' : recall_score(Y_test, y_predict_result),\n        'f1' : f1_score(Y_test, y_predict_result),\n        'Feature Count' : len(X.columns)\n        }\n")),(0,r.kt)("h3",{id:"\u5168\u7279\u5fb5\u539f\u59cb\u6210\u6548"},"\u5168\u7279\u5fb5\u539f\u59cb\u6210\u6548"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/", "height": 81} id="0LJVcjm_3m6D" outputId="e5daaf02-aded-4542-8fef-479f822f3265"',colab:'{"base_uri":','"https://localhost:8080/",':!0,'"height":':!0,"81}":!0,id:'"0LJVcjm_3m6D"',outputId:'"e5daaf02-aded-4542-8fef-479f822f3265"'},"res = pd.DataFrame(use_RandomForestClassifier_evaluation_metrics_on_test_set(X,Y), index=['ALL'])\nres\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/", "height": 924} id="F25ffHzF7voO" outputId="ade4808b-03e4-41f4-a39d-97308ef901fc"',colab:'{"base_uri":','"https://localhost:8080/",':!0,'"height":':!0,"924}":!0,id:'"F25ffHzF7voO"',outputId:'"ade4808b-03e4-41f4-a39d-97308ef901fc"'},"# Correlation Matrix\nplt.figure(figsize=(15,15))\ncor = df.corr() \nsns.heatmap(cor, annot=True)\nplt.show()\n")),(0,r.kt)("h2",{id:"\u904e\u6ffe\u65b9\u6cd5-filter-method"},"\u904e\u6ffe\u65b9\u6cd5 Filter Method"),(0,r.kt)("h3",{id:"\u4f9d\u95dc\u806f\u6027\u79fb\u9664\u7279\u5fb5"},"\u4f9d\u95dc\u806f\u6027\u79fb\u9664\u7279\u5fb5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/"} id="oNL87FcE73t7" outputId="de9c0466-5c9e-487b-9148-98898a5d6fbe"',colab:'{"base_uri":','"https://localhost:8080/"}':!0,id:'"oNL87FcE73t7"',outputId:'"de9c0466-5c9e-487b-9148-98898a5d6fbe"'},"# \u53d6\u5f97\u5177\u6709\u8207\u5176\u4ed6\u90e8\u5206\u7279\u5fb5\u9ad8\u5ea6\u76f8\u95dc\u7684\u67d0\u7279\u5fb5\u7d55\u5c0d\u503c\ncor_target = abs(cor[\"FamilySize\"])\n\n# \u9078\u64c7\u9ad8\u5ea6\u76f8\u95dc\u7684\u7279\u5fb5\uff08\u95be\u503c = 0.2\uff09\nrelevant_features = cor_target[cor_target>0.2]\n\n# \u9078\u64c7\u7279\u5fb5\u540d\u7a31\nnames = [index for index, value in relevant_features.iteritems()]\n\n# \u522a\u9664\u76ee\u6a19\u7279\u5fb5\nnames.remove('FamilySize')\n\nprint(names)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/", "height": 112} id="ko7QguiG8zEz" outputId="f76137bf-7f74-4e24-ece7-e9577faa5147"',colab:'{"base_uri":','"https://localhost:8080/",':!0,'"height":':!0,"112}":!0,id:'"ko7QguiG8zEz"',outputId:'"f76137bf-7f74-4e24-ece7-e9577faa5147"'},"res = res.append(\n    pd.DataFrame(\n        use_RandomForestClassifier_evaluation_metrics_on_test_set(\n            X[names],\n            Y), \n            index=['Remove High Corr']))\nres\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/", "height": 868} id="gt6FFMwE9FxX" outputId="47605536-b9cc-4fa6-89c8-450c221affe1"',colab:'{"base_uri":','"https://localhost:8080/",':!0,'"height":':!0,"868}":!0,id:'"gt6FFMwE9FxX"',outputId:'"47605536-b9cc-4fa6-89c8-450c221affe1"'},"# Correlation Matrix\nplt.figure(figsize=(15,15))\ncor = X[names].corr() \nsns.heatmap(cor, annot=True,)\nplt.show()\n")),(0,r.kt)("h3",{id:"\u55ae\u8b8a\u91cf\u7279\u5fb5\u9078\u53d6-univariate-selection"},"\u55ae\u8b8a\u91cf\u7279\u5fb5\u9078\u53d6 Univariate Selection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'id="9ryoZoef907J"',id:'"9ryoZoef907J"'},"def univariate_selection(X, Y, k=10):\n    \n    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size = 0.2, stratify=Y, random_state = 9527)\n    \n    scaler = StandardScaler().fit(X_train)\n    X_train_scaled = scaler.transform(X_train)\n    X_test_scaled = scaler.transform(X_test)\n    \n    # User SelectKBest to select top 10 features based on f-test\n    selector = SelectKBest(f_classif)\n    X_new = selector.fit_transform(X_train_scaled, Y_train)\n\n    feature_idx = selector.get_support()\n\n    feature_names = X.columns[feature_idx]\n    \n    return feature_names\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/"} id="Qk5xeqh3-6M7" outputId="622f7fd3-c4d7-41ca-dbfd-120294038e97"',colab:'{"base_uri":','"https://localhost:8080/"}':!0,id:'"Qk5xeqh3-6M7"',outputId:'"622f7fd3-c4d7-41ca-dbfd-120294038e97"'},"univariate_selection(X,Y)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/", "height": 143} id="btj_fjvh_AgV" outputId="cc47ce09-6d60-46cf-9f6b-06b0819b6e4f"',colab:'{"base_uri":','"https://localhost:8080/",':!0,'"height":':!0,"143}":!0,id:'"btj_fjvh_AgV"',outputId:'"cc47ce09-6d60-46cf-9f6b-06b0819b6e4f"'},"res = res.append(\n    pd.DataFrame(\n        use_RandomForestClassifier_evaluation_metrics_on_test_set(\n            X[univariate_selection(X,Y)],\n            Y), \n            index=['Univariate Selection']))\nres\n")),(0,r.kt)("h2",{id:"\u5305\u88dd\u65b9\u6cd5-wrapper-method"},"\u5305\u88dd\u65b9\u6cd5 Wrapper Method"),(0,r.kt)("h3",{id:"\u905e\u8ff4\u7279\u5fb5\u6d88\u9664-recursive-feature-elimination-rfe"},"\u905e\u8ff4\u7279\u5fb5\u6d88\u9664 Recursive feature elimination (RFE)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'id="pWq1YFviAXAG"',id:'"pWq1YFviAXAG"'},"# Recursive Feature Elimination\ndef rfe_selection( X , Y, k=10):\n    \n    # Split train and test sets\n    X_train, X_test, Y_train, Y_test = train_test_split(\n        X, \n        Y, \n        test_size = 0.2, \n        stratify=Y, \n        random_state = 9527)\n    \n    scaler = StandardScaler().fit(X_train)\n    X_train_scaled = scaler.transform(X_train)\n    X_test_scaled = scaler.transform(X_test)\n    \n    model = RandomForestClassifier(\n        criterion='entropy', \n        random_state=9527\n        )\n    rfe = RFE(model)\n    rfe = rfe.fit(X_train_scaled, Y_train)\n\n    feature_names = X.columns[rfe.get_support()]\n    \n    return feature_names\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/"} id="NmYu5pDLBivj" outputId="a143d8ec-c516-4082-af04-26ed7157d958"',colab:'{"base_uri":','"https://localhost:8080/"}':!0,id:'"NmYu5pDLBivj"',outputId:'"a143d8ec-c516-4082-af04-26ed7157d958"'},"rfe_selection(X,Y,10)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/", "height": 175} id="4lVRX8U2B1yF" outputId="d17983f8-3227-499e-aab3-cb1c94d6bcaf"',colab:'{"base_uri":','"https://localhost:8080/",':!0,'"height":':!0,"175}":!0,id:'"4lVRX8U2B1yF"',outputId:'"d17983f8-3227-499e-aab3-cb1c94d6bcaf"'},"res = res.append(\n    pd.DataFrame(\n        use_RandomForestClassifier_evaluation_metrics_on_test_set(\n            X[rfe_selection(X,Y)],\n            Y), \n            index=['RFE']))\n\nres\n")),(0,r.kt)("h2",{id:"\u5d4c\u5165\u65b9\u6cd5-embedded-method"},"\u5d4c\u5165\u65b9\u6cd5 Embedded Method"),(0,r.kt)("h3",{id:"\u91cd\u8981\u7279\u5fb5-feature-importance"},"\u91cd\u8981\u7279\u5fb5 Feature importance"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'id="QjElP8WYCQg2"',id:'"QjElP8WYCQg2"'},"def feature_importance(X,Y):\n    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size = 0.2,stratify=Y, random_state = 9527)\n    \n    scaler = StandardScaler().fit(X_train)\n    X_train_scaled = scaler.transform(X_train)\n    X_test_scaled = scaler.transform(X_test)\n\n    model = RandomForestClassifier()\n    model = model.fit(X_train_scaled,Y_train)\n\n    plt.figure(figsize=(10, 12))\n    feat_importances = pd.Series(model.feature_importances_, index=X.columns)\n    feat_importances.sort_values().plot(kind='barh')\n\n    plt.show()\n    return model\n\n\ndef select_features_from_model(model,X):\n    \n    model = SelectFromModel(model, prefit=True, threshold=0.013)\n    feature_idx = model.get_support()\n    feature_names = X.columns[feature_idx]\n        \n    return feature_names\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/", "height": 700} id="nA8G5iHDGcjJ" outputId="835642da-964d-4dac-f49d-d2fafd94c7b7"',colab:'{"base_uri":','"https://localhost:8080/",':!0,'"height":':!0,"700}":!0,id:'"nA8G5iHDGcjJ"',outputId:'"835642da-964d-4dac-f49d-d2fafd94c7b7"'},"model = feature_importance(X,Y)\nfeature_imp_feature_names = select_features_from_model(model,X)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/"} id="ppsg-Ja3G8E8" outputId="96e92290-1c75-4855-d494-887af67c7b30"',colab:'{"base_uri":','"https://localhost:8080/"}':!0,id:'"ppsg-Ja3G8E8"',outputId:'"96e92290-1c75-4855-d494-887af67c7b30"'},"feature_imp_feature_names\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/", "height": 206} id="HSn_wJJEEGN6" outputId="df29ca1c-35a7-4810-d84b-5be45a1e3316"',colab:'{"base_uri":','"https://localhost:8080/",':!0,'"height":':!0,"206}":!0,id:'"HSn_wJJEEGN6"',outputId:'"df29ca1c-35a7-4810-d84b-5be45a1e3316"'},"res = res.append(\n    pd.DataFrame(\n        use_RandomForestClassifier_evaluation_metrics_on_test_set(\n            X[feature_imp_feature_names],\n            Y), \n            index=['Feature Importance']))\nres\n")),(0,r.kt)("h3",{id:"l1\u6b63\u898f\u5316-l1-regularization"},"L1\u6b63\u898f\u5316 L1 regularization"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'id="DPiC73GwG4qz" colab={"base_uri": "https://localhost:8080/"} outputId="599d89e0-ba2d-4bf7-c961-f913cc26bd0c"',id:'"DPiC73GwG4qz"',colab:'{"base_uri":','"https://localhost:8080/"}':!0,outputId:'"599d89e0-ba2d-4bf7-c961-f913cc26bd0c"'},"def run_l1_regularization(X,Y):\n    \n    # Split train and test set\n    X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size = 0.2,stratify=Y, random_state = 123)\n    \n    # All features of dataset are float values. You normalize all features of the train and test dataset here.\n    scaler = StandardScaler().fit(X_train)\n    X_train_scaled = scaler.transform(X_train)\n    X_test_scaled = scaler.transform(X_test)\n    \n    # Select L1 regulated features from LinearSVC output \n    selection = SelectFromModel(LinearSVC(C=1, penalty='l1', dual=False))\n    selection.fit(X_train_scaled, Y_train)\n\n    feature_names = X.columns[(selection.get_support())]\n    \n    return feature_names\n\nl1reg_feature_names = run_l1_regularization(X,Y)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/", "height": 292} id="jWrE9hoRH6QS" outputId="2fd81e47-8ff7-45bb-c73e-f699b08ec6fd"',colab:'{"base_uri":','"https://localhost:8080/",':!0,'"height":':!0,"292}":!0,id:'"jWrE9hoRH6QS"',outputId:'"2fd81e47-8ff7-45bb-c73e-f699b08ec6fd"'},"res = res.append(\n    pd.DataFrame(\n        use_RandomForestClassifier_evaluation_metrics_on_test_set(\n            X[run_l1_regularization(X,Y)],\n            Y), \n            index=['L1']))\nres\n")),(0,r.kt)("h2",{id:"\u8a55\u4f30\u5c0f\u7d50"},"\u8a55\u4f30\u5c0f\u7d50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'colab={"base_uri": "https://localhost:8080/", "height": 261} id="hQzO3NJPO1DA" outputId="ca3beada-33e4-45c1-9f70-d241aeeac20c"',colab:'{"base_uri":','"https://localhost:8080/",':!0,'"height":':!0,"261}":!0,id:'"hQzO3NJPO1DA"',outputId:'"ca3beada-33e4-45c1-9f70-d241aeeac20c"'},"final_res = pd.DataFrame(use_RandomForestClassifier_evaluation_metrics_on_test_set(X,Y), index=['ALL'])\nfinal_res = final_res.append(pd.DataFrame(use_RandomForestClassifier_evaluation_metrics_on_test_set(X[names],Y), index=['Remove High Corr']))\nfinal_res = final_res.append(pd.DataFrame(use_RandomForestClassifier_evaluation_metrics_on_test_set(X[univariate_selection(X,Y)],Y), index=['Univariate Selection']))\nfinal_res = final_res.append(pd.DataFrame(use_RandomForestClassifier_evaluation_metrics_on_test_set(X[rfe_selection(X,Y)],Y), index=['RFE']))\nfinal_res = final_res.append(pd.DataFrame(use_RandomForestClassifier_evaluation_metrics_on_test_set(X[run_l1_regularization(X,Y)],Y), index=['L1']))\nfinal_res.sort_values('accuracy', ascending=False)\n")),(0,r.kt)("h2",{id:"\u53c3\u8003"},"\u53c3\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/duxuhao/Feature-Selection/master/example/titanic/clean_train.csv"},"\u9435\u9054\u5c3c\u865f\u8cc7\u6599\u96c6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.coursera.org/learn/machine-learning-data-lifecycle-in-production"},"Machine Learning Data Lifecycle in Production")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops"},"Machine Learning Engineering for Production (MLOps) \u5c08\u9805\u8ab2\u7a0b"))))}u.isMDXComponent=!0}}]);