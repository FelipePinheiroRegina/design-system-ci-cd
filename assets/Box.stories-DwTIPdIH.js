import{j as e}from"./index-BwXyKlkv.js";import{B as x,T as t}from"./index-Cm49-Z1S.js";import"./index-2yJIXLcc.js";import"./index-Bn05qqr6.js";const f={title:"Surfaces/Box",component:x,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"O componente `Box` é um container genérico para envolver elementos.\n\n- **Por padrão**, é um `<div>`, mas pode ser alterado com a prop `as`.\n- **Possui estilos básicos**: preenchimento (`padding`), borda (`border`), cor de fundo (`backgroundColor`)."}}},args:{children:e.jsx(t,{children:"Testing my Box component"})},argTypes:{as:{control:"text",description:"Define o elemento HTML renderizado. Padrão: `<div>`.",table:{defaultValue:{summary:"div"}}},children:{control:!1,description:"Define o conteúdo dentro do `Box` ex.: `<Components />, <div></div>`."}}},o={},r={args:{as:"section",children:e.jsx(t,{children:"Este Box é um <section>"})}},s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Este é um Box com conteúdo personalizado."}),e.jsx(t,{size:"sm",children:"Ele suporta múltiplos elementos dentro."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var i,d,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    as: 'section',
    children: <Text>Este Box é um &lt;section&gt;</Text>
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,l,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <>
        <Text>Este é um Box com conteúdo personalizado.</Text>
        <Text size="sm">Ele suporta múltiplos elementos dentro.</Text>
      </>
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const E=["Primary","AsSection","CustomContent"];export{r as AsSection,s as CustomContent,o as Primary,E as __namedExportsOrder,f as default};
