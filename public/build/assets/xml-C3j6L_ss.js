import{m as r}from"./ContentPanel-CEDTGdbM.js";import"./app-DLQKgLyV.js";/* empty css               */import"./useCopy-BW_CUayT.js";import"./index-d4ASIRIp.js";import"./ConfigsTable-CZOw3awc.js";import"./SelectScrollDownButton-DVOeJHzT.js";import"./useRowSelection-5vMTpecC.js";import"./ClearFilters.vue_vue_type_script_setup_true_lang-B55vjuSl.js";import"./PopoverContent-D5Q-EyXX.js";import"./ScrollArea-DlNRhzA2.js";import"./eventBus-CGRXT3Tn.js";import"./CardFooter.vue_vue_type_script_setup_true_lang-B2W6mK03.js";import"./DropdownMenuSeparator.vue_vue_type_script_setup_true_lang-D_5wqxGo.js";import"./Spinner-CwT5UNvY.js";import"./useTemplatesGithub-szOiOTRw.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.52.0(f6dc0eb8fce67e57f6036f4769d92c1666cdf546)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var m=Object.defineProperty,p=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,d=(t,e,n,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of c(e))!l.call(t,o)&&o!==n&&m(t,o,{get:()=>e[o],enumerable:!(a=p(e,o))||a.enumerable});return t},s=(t,e,n)=>(d(t,e,"default"),n),i={};s(i,r);var T={comments:{blockComment:["<!--","-->"]},brackets:[["<",">"]],autoClosingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],surroundingPairs:[{open:"<",close:">"},{open:"'",close:"'"},{open:'"',close:'"'}],onEnterRules:[{beforeText:new RegExp("<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$","i"),afterText:/^<\/([_:\w][_:\w-.\d]*)\s*>$/i,action:{indentAction:i.languages.IndentAction.IndentOutdent}},{beforeText:new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$","i"),action:{indentAction:i.languages.IndentAction.Indent}}]},h={defaultToken:"",tokenPostfix:".xml",ignoreCase:!0,qualifiedName:/(?:[\w\.\-]+:)?[\w\.\-]+/,tokenizer:{root:[[/[^<&]+/,""],{include:"@whitespace"},[/(<)(@qualifiedName)/,[{token:"delimiter"},{token:"tag",next:"@tag"}]],[/(<\/)(@qualifiedName)(\s*)(>)/,[{token:"delimiter"},{token:"tag"},"",{token:"delimiter"}]],[/(<\?)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/(<\!)(@qualifiedName)/,[{token:"delimiter"},{token:"metatag",next:"@tag"}]],[/<\!\[CDATA\[/,{token:"delimiter.cdata",next:"@cdata"}],[/&\w+;/,"string.escape"]],cdata:[[/[^\]]+/,""],[/\]\]>/,{token:"delimiter.cdata",next:"@pop"}],[/\]/,""]],tag:[[/[ \t\r\n]+/,""],[/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,["attribute.name","","attribute.value"]],[/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,["attribute.name","","attribute.value"]],[/@qualifiedName/,"attribute.name"],[/\?>/,{token:"delimiter",next:"@pop"}],[/(\/)(>)/,[{token:"tag"},{token:"delimiter",next:"@pop"}]],[/>/,{token:"delimiter",next:"@pop"}]],whitespace:[[/[ \t\r\n]+/,""],[/<!--/,{token:"comment",next:"@comment"}]],comment:[[/[^<\-]+/,"comment.content"],[/-->/,{token:"comment",next:"@pop"}],[/<!--/,"comment.content.invalid"],[/[<\-]/,"comment.content"]]}};export{T as conf,h as language};