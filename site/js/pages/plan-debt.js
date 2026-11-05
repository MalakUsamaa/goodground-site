GG.define("ChatDebt", [["div",{"data-theme":"{{theme}}","style":"min-height: 1100px; box-sizing: border-box; display: flex; flex-direction: column; font-family: 'Figtree', system-ui, sans-serif; color: var(--a); background: radial-gradient(50% 40% at 50% 0%, rgba(214, 205, 176, 0.08) 0%, rgba(214, 205, 176, 0) 70%), var(--bg)"},["\n\n",["header",{"style":"position: sticky; top: 0; z-index: 5; height: 84px; box-sizing: border-box; padding: 20px 64px; display: flex; align-items: center; gap: 16px; background: rgba(var(--bg-rgb), 0.86); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-bottom: 1px solid rgba(var(--fg-rgb), 0.08)"},["\n",["a",{"href":"/","style":"flex: 1; font-family: 'Newsreader', Georgia, serif; font-size: 30px; font-weight: 500; letter-spacing: -0.02em; text-decoration: none; color: var(--a)"},["goodground"]],"\n",["p",{"style":"margin: 0; font-family: 'Inter', system-ui, sans-serif; font-size: 15px; color: var(--eyebrow)"},["Planning  ·  {{label}}"]],"\n",["div",{"style":"flex: 1; display: flex; justify-content: flex-end; align-items: center; gap: 14px"},[["div",{"role":"group","aria-label":"Colour mode","style":"flex: none; display: flex; align-items: center; gap: 2px; height: 40px; box-sizing: border-box; padding: 3px; border-radius: 999px; border: 1px solid rgba(var(--tg-rgb), 0.22)"},[["button",{"type":"button","aria-label":"Light mode","aria-pressed":"{{tLight.on}}","onClick":"{{tLight.pick}}","style":"display: flex; align-items: center; justify-content: center; width: 38px; height: 32px; padding: 0; border: none; border-radius: 999px; background: {{tLight.bg}}; color: {{tLight.ink}}; cursor: pointer; transition: background 0.2s ease, color 0.2s ease"},[["svg",{"width":"15","height":"15","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[["circle",{"cx":"12","cy":"12","r":"4"},[]],["path",{"d":"M12 2v2"},[]],["path",{"d":"M12 20v2"},[]],["path",{"d":"M4.9 4.9l1.4 1.4"},[]],["path",{"d":"M17.7 17.7l1.4 1.4"},[]],["path",{"d":"M2 12h2"},[]],["path",{"d":"M20 12h2"},[]],["path",{"d":"M4.9 19.1l1.4-1.4"},[]],["path",{"d":"M17.7 6.3l1.4-1.4"},[]]]]]],["button",{"type":"button","aria-label":"Dark mode","aria-pressed":"{{tDark.on}}","onClick":"{{tDark.pick}}","style":"display: flex; align-items: center; justify-content: center; width: 38px; height: 32px; padding: 0; border: none; border-radius: 999px; background: {{tDark.bg}}; color: {{tDark.ink}}; cursor: pointer; transition: background 0.2s ease, color 0.2s ease"},[["svg",{"width":"15","height":"15","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"1.8","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[["path",{"d":"M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"},[]]]]]]]],"\n",["span",{"style":"display: flex; align-items: center; gap: 8px; height: 36px; padding: 0 14px; border-radius: 999px; background: rgba(var(--fg-rgb), 0.08); font-family: 'Inter', system-ui, sans-serif; font-size: 13px; font-weight: 500; color: var(--eyebrow)"},[["svg",{"width":"14","height":"14","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[["rect",{"x":"4","y":"11","width":"16","height":"10","rx":"2"},[]],["path",{"d":"M8 11V7a4 4 0 0 1 8 0v4"},[]]]],"{{status}}"]],"\n",["a",{"href":"/","style":"display: flex; align-items: center; height: 44px; padding: 0 18px; border-radius: 999px; border: 1px solid rgba(var(--fg-rgb), 0.4); text-decoration: none; font-family: 'Inter', system-ui, sans-serif; font-size: 14px; font-weight: 500; color: var(--a)"},["End chat"]],"\n"]],"\n"]],"\n\n",["main",{"aria-live":"polite","style":"flex: 1; width: 100%; max-width: 808px; margin: 0 auto; box-sizing: border-box; padding: 56px 24px 48px; display: flex; flex-direction: column; gap: 28px"},["\n\n",["sc-for",{"list":"{{msgs}}","as":"m","hint-placeholder-count":"3"},["\n",["sc-if",{"value":"{{m.ai}}","hint-placeholder-val":"{{ true }}"},["\n",["div",{"style":"display: flex; gap: 16px; align-items: flex-start; max-width: 640px"},["\n",["span",{"aria-hidden":"true","style":"flex: none; width: 34px; height: 34px; border-radius: 50%; background: #34371F; border: 1px solid rgba(var(--fg-rgb), 0.2); display: flex; align-items: center; justify-content: center; font-family: 'Newsreader', Georgia, serif; font-size: 18px; font-style: italic; color: #F3EEE6"},["g"]],"\n",["div",{"style":"display: flex; flex-direction: column; gap: 6px; padding-top: 4px"},["\n",["p",{"style":"margin: 0; font-size: 19px; line-height: 1.55"},["{{m.text}}"]],"\n",["sc-if",{"value":"{{m.hasHint}}","hint-placeholder-val":"{{ false }}"},[["p",{"style":"margin: 0; font-size: 15px; line-height: 1.5; color: var(--muted)"},["{{m.hint}}"]]]],"\n"]],"\n"]],"\n"]],"\n",["sc-if",{"value":"{{m.me}}","hint-placeholder-val":"{{ false }}"},["\n",["div",{"style":"display: flex; flex-direction: column; align-items: flex-end; gap: 2px"},["\n",["p",{"style":"margin: 0; max-width: 480px; padding: 12px 20px; border-radius: 22px 22px 6px 22px; background: var(--a); color: var(--b); font-size: 17px; line-height: 1.45; font-weight: 500"},["{{m.text}}"]],"\n",["sc-if",{"value":"{{m.canEdit}}","hint-placeholder-val":"{{ false }}"},[["button",{"type":"button","aria-label":"Edit this answer","onClick":"{{m.edit}}","style":"display: flex; align-items: center; gap: 6px; height: 32px; padding: 0 8px; border: none; background: transparent; color: var(--soft); font-family: inherit; font-size: 13px; cursor: pointer"},[["svg",{"width":"13","height":"13","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[["path",{"d":"M12 20h9"},[]],["path",{"d":"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"},[]]]],"Edit"]]]],"\n"]],"\n"]],"\n"]],"\n\n",["sc-if",{"value":"{{typing}}","hint-placeholder-val":"{{ false }}"},["\n",["div",{"role":"status","aria-label":"goodground is typing","style":"display: flex; gap: 16px; align-items: center"},["\n",["span",{"aria-hidden":"true","style":"flex: none; width: 34px; height: 34px; border-radius: 50%; background: #34371F; border: 1px solid rgba(var(--fg-rgb), 0.2); display: flex; align-items: center; justify-content: center; font-family: 'Newsreader', Georgia, serif; font-size: 18px; font-style: italic; color: #F3EEE6"},["g"]],"\n",["span",{"style":"display: flex; gap: 6px; padding: 14px 18px; border-radius: 18px; background: rgba(var(--fg-rgb), 0.06)"},["\n",["span",{"style":"width: 7px; height: 7px; border-radius: 50%; background: var(--eyebrow); animation: ggDot 1.2s ease-in-out infinite"},[]],"\n",["span",{"style":"width: 7px; height: 7px; border-radius: 50%; background: var(--eyebrow); animation: ggDot 1.2s ease-in-out 0.2s infinite"},[]],"\n",["span",{"style":"width: 7px; height: 7px; border-radius: 50%; background: var(--eyebrow); animation: ggDot 1.2s ease-in-out 0.4s infinite"},[]],"\n"]],"\n"]],"\n"]],"\n\n",["sc-if",{"value":"{{done}}","hint-placeholder-val":"{{ false }}"},["\n",["div",{"style":"margin-left: 50px; box-sizing: border-box; padding: 40px; border-radius: 24px; background: rgba(var(--fg-rgb), 0.05); border: 1px solid rgba(var(--fg-rgb), 0.12); display: flex; flex-direction: column; gap: 40px"},["\n",["div",{"style":"display: flex; flex-direction: column; gap: 16px"},["\n",["p",{"style":"margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: 24px; line-height: 1.2; color: var(--eyebrow)"},["{{res.title}}"]],"\n",["p",{"style":"margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: 80px; line-height: 1; letter-spacing: -0.02em"},["{{res.value}}"]],"\n",["sc-if",{"value":"{{showSub}}","hint-placeholder-val":"{{ false }}"},[["p",{"style":"margin: 8px 0 0; font-size: 16px; line-height: 1.55; color: var(--muted)"},["{{res.sub}}"]]]],"\n",["sc-if",{"value":"{{hasStats}}","hint-placeholder-val":"{{ true }}"},["\n",["div",{"style":"display: flex; gap: 48px; margin-top: 24px"},["\n",["sc-for",{"list":"{{res.stats}}","as":"t","hint-placeholder-count":"2"},["\n",["div",{"style":"flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px"},["\n",["span",{"style":"font-size: 13px; color: var(--muted)"},["{{t.label}}"]],"\n",["span",{"style":"font-family: 'Newsreader', Georgia, serif; font-size: 28px; line-height: 1.15"},["{{t.value}}"]],"\n"]],"\n"]],"\n"]],"\n"]],"\n"]],"\n",["sc-if",{"value":"{{hasSlider}}","hint-placeholder-val":"{{ false }}"},["\n",["div",{"style":"display: flex; flex-direction: column; gap: 14px; padding: 28px; border-radius: 20px; background: rgba(var(--fg-rgb), 0.045)"},["\n",["p",{"style":"margin: 0 0 4px; font-family: 'Inter', system-ui, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.2em; text-transform: uppercase; color: var(--soft)"},["Try it"]],"\n",["div",{"style":"display: flex; justify-content: space-between; align-items: baseline; gap: 12px"},["\n",["label",{"for":"saveSlider","style":"font-size: 15px; color: var(--muted)"},["{{sl.label}}"]],"\n",["span",{"style":"font-family: 'Newsreader', Georgia, serif; font-size: 26px"},["{{sl.valueLabel}}"]],"\n"]],"\n",["input",{"id":"saveSlider","type":"range","min":"{{sl.min}}","max":"{{sl.max}}","step":"{{sl.step}}","value":"{{sl.value}}","onChange":"{{sl.onChange}}","style":"width: 100%; height: 28px; margin: 0; accent-color: var(--hi); cursor: pointer"},[]],"\n",["sc-if",{"value":"{{hasToggle}}","hint-placeholder-val":"{{ false }}"},["\n",["div",{"style":"display: flex; flex-direction: column; gap: 24px; margin-top: 24px"},["\n",["div",{"style":"display: flex; gap: 12px; align-items: center"},["\n",["button",{"type":"button","role":"switch","aria-checked":"{{tg.checked}}","aria-label":"{{tg.label}}","onClick":"{{tg.flip}}","style":"flex: none; position: relative; width: 46px; height: 28px; padding: 0; border: none; border-radius: 999px; background: {{tg.bg}}; cursor: pointer; transition: background 0.2s ease"},[["span",{"style":"position: absolute; top: 3px; left: {{tg.knob}}; width: 22px; height: 22px; border-radius: 50%; background: {{tg.knobBg}}; transition: left 0.2s ease"},[]]]],"\n",["span",{"style":"font-size: 15px"},["{{tg.label}}"]],"\n"]],"\n",["sc-if",{"value":"{{tg.on}}","hint-placeholder-val":"{{ true }}"},["\n",["div",{"style":"display: flex; height: 6px; gap: 3px"},["\n",["span",{"style":"flex: 3; background: var(--hi); border-radius: 999px"},[]],"\n",["span",{"style":"flex: 1; background: #A9875A; border-radius: 999px"},[]],"\n"]],"\n",["div",{"style":"display: flex; justify-content: space-between; gap: 16px; font-size: 13px; color: var(--muted)"},["\n",["span",{"style":"display: flex; align-items: center; gap: 8px"},[["span",{"style":"width: 7px; height: 7px; border-radius: 50%; background: var(--hi)"},[]],"{{tg.goalLabel}} ",["strong",{"style":"font-weight: 600; color: var(--a)"},["{{tg.goalAmt}}"]]]],"\n",["span",{"style":"display: flex; align-items: center; gap: 8px"},[["span",{"style":"width: 7px; height: 7px; border-radius: 50%; background: #A9875A"},[]],"{{tg.efLabel}} ",["strong",{"style":"font-weight: 600; color: var(--a)"},["{{tg.efAmt}}"]]," {{tg.efNote}}"]],"\n"]],"\n"]],"\n"]],"\n"]],"\n"]],"\n"]],"\n",["div",{"style":"display: flex; flex-direction: column"},["\n",["p",{"style":"margin: 0 0 8px; font-size: 15px; font-weight: 600"},["Your next steps"]],"\n",["sc-for",{"list":"{{firstSteps}}","as":"x","hint-placeholder-count":"3"},["\n",["p",{"style":"margin: 0; display: flex; gap: 14px; padding: 7px 0; font-size: 15px; line-height: 1.5; color: var(--ink2)"},[["span",{"style":"flex: none; font-family: 'Inter', system-ui, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.12em; padding-top: 3px; color: var(--eyebrow)"},["{{x.n}}"]],"{{x.text}}"]],"\n"]],"\n"]],"\n",["p",{"style":"margin: -16px 0 0; font-size: 13px; line-height: 1.55; color: var(--soft)"},["These figures are estimates for general guidance only, based on your answers and the assumptions shown in your PDF. They are not financial advice or an offer of credit. Check with your bank or a licensed adviser before making decisions."]],"\n",["div",{"style":"display: flex; gap: 12px; flex-wrap: wrap"},["\n",["button",{"type":"button","onClick":"{{openPdf}}","style":"height: 52px; padding: 0 26px; border: none; border-radius: 999px; background: var(--a); color: var(--b); font-family: 'Figtree', system-ui, sans-serif; font-size: 16px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px"},[["svg",{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[["path",{"d":"M12 4v12"},[]],["path",{"d":"M6 11l6 6 6-6"},[]],["path",{"d":"M5 20h14"},[]]]],"Download PDF"]],"\n",["button",{"type":"button","onClick":"{{restart}}","style":"height: 52px; padding: 0 22px; border: 1px solid rgba(var(--fg-rgb), 0.3); border-radius: 999px; background: transparent; color: var(--a); font-family: 'Figtree', system-ui, sans-serif; font-size: 16px; font-weight: 500; cursor: pointer"},["Start over"]],"\n"]],"\n"]],"\n\n",["sc-if",{"value":"{{hasTools}}","hint-placeholder-val":"{{ false }}"},["\n",["div",{"style":"display: flex; gap: 16px; align-items: flex-start; max-width: 640px"},["\n",["span",{"aria-hidden":"true","style":"flex: none; width: 34px; height: 34px; border-radius: 50%; background: #34371F; border: 1px solid rgba(var(--fg-rgb), 0.2); display: flex; align-items: center; justify-content: center; font-family: 'Newsreader', Georgia, serif; font-size: 18px; font-style: italic; color: #F3EEE6"},["g"]],"\n",["p",{"style":"margin: 0; padding-top: 4px; font-size: 19px; line-height: 1.55"},["{{toolsIntro}}"]],"\n"]],"\n",["div",{"style":"margin-left: 50px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px"},["\n",["sc-for",{"list":"{{res.tools}}","as":"t","hint-placeholder-count":"3"},["\n",["a",{"href":"{{t.href}}","style":"box-sizing: border-box; min-height: 150px; padding: 20px; border-radius: 18px; background: rgba(var(--fg-rgb), 0.05); border: 1px solid rgba(var(--fg-rgb), 0.14); text-decoration: none; color: var(--a); display: flex; flex-direction: column; gap: 8px"},["\n",["span",{"style":"display: flex; align-items: center; justify-content: space-between; gap: 8px; font-family: 'Newsreader', Georgia, serif; font-size: 22px"},["{{t.label}}",["svg",{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true","style":"flex: none"},[["path",{"d":"M5 12h14"},[]],["path",{"d":"M13 6l6 6-6 6"},[]]]]]],"\n",["span",{"style":"font-size: 14px; line-height: 1.5; color: var(--muted)"},["{{t.text}}"]],"\n"]],"\n"]],"\n"]],"\n"]],"\n\n",["div",{"style":"display: flex; gap: 16px; align-items: flex-start; max-width: 640px"},["\n",["span",{"aria-hidden":"true","style":"flex: none; width: 34px; height: 34px; border-radius: 50%; background: #34371F; border: 1px solid rgba(var(--fg-rgb), 0.2); display: flex; align-items: center; justify-content: center; font-family: 'Newsreader', Georgia, serif; font-size: 18px; font-style: italic; color: #F3EEE6"},["g"]],"\n",["p",{"style":"margin: 0; padding-top: 4px; font-size: 19px; line-height: 1.55"},["Nothing from this chat is saved, so it’s gone when you close the page. Download your PDF if you’d like to keep your plan."]],"\n"]],"\n"]],"\n"]],"\n\n",["sc-if",{"value":"{{composing}}","hint-placeholder-val":"{{ true }}"},["\n",["div",{"style":"position: sticky; bottom: 0; z-index: 4; padding: 24px 24px 32px; background: linear-gradient(180deg, rgba(var(--bg-rgb), 0) 0%, var(--bg) 36%)"},["\n",["div",{"style":"max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px"},["\n",["sc-if",{"value":"{{isChoice}}","hint-placeholder-val":"{{ false }}"},["\n",["div",{"role":"group","aria-label":"{{q.title}}","style":"display: flex; flex-wrap: wrap; gap: 10px"},["\n",["sc-for",{"list":"{{chips}}","as":"c","hint-placeholder-count":"4"},["\n",["button",{"type":"button","onClick":"{{c.pick}}","style":"min-height: 48px; padding: 10px 20px; border-radius: 999px; border: 1px solid rgba(var(--fg-rgb), 0.3); background: rgba(var(--fg-rgb), 0.04); color: var(--a); font-family: inherit; font-size: 16px; font-weight: 500; text-align: left; cursor: pointer"},["{{c.label}}",["sc-if",{"value":"{{c.hasNote}}","hint-placeholder-val":"{{ false }}"},[["span",{"style":"margin-left: 8px; font-size: 14px; color: var(--muted)"},["{{c.note}}"]]]]]],"\n"]],"\n"]],"\n"]],"\n",["sc-if",{"value":"{{isNumber}}","hint-placeholder-val":"{{ true }}"},["\n",["div",{"style":"display: flex; align-items: center; gap: 12px; height: 64px; box-sizing: border-box; padding: 0 8px 0 24px; border-radius: 999px; background: var(--surface); border: 1px solid rgba(var(--fg-rgb), 0.18); box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25)"},["\n",["span",{"style":"font-size: 16px; font-weight: 500; color: var(--muted)"},["{{q.prefix}}"]],"\n",["label",{"for":"reply","style":"position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)"},["{{q.title}}"]],"\n",["input",{"id":"reply","type":"text","inputmode":"decimal","autocomplete":"off","placeholder":"{{q.placeholder}}","value":"{{draft}}","onChange":"{{typeDraft}}","onKeyDown":"{{draftKey}}","style":"flex: 1; min-width: 0; border: none; background: transparent; padding: 0; color: var(--a); font-family: inherit; font-size: 18px"},[]],"\n",["span",{"style":"font-size: 15px; color: var(--muted); white-space: nowrap"},["{{q.suffix}}"]],"\n",["sc-if",{"value":"{{q.optional}}","hint-placeholder-val":"{{ false }}"},[["button",{"type":"button","onClick":"{{skip}}","style":"height: 44px; padding: 0 14px; border: none; border-radius: 999px; background: transparent; color: var(--eyebrow); font-family: inherit; font-size: 15px; cursor: pointer"},["Skip"]]]],"\n",["button",{"type":"button","aria-label":"Send","onClick":"{{send}}","style":"flex: none; width: 48px; height: 48px; border: none; border-radius: 50%; background: {{sendBg}}; color: var(--b); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s ease"},[["svg",{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[["path",{"d":"M12 19V5"},[]],["path",{"d":"M6 11l6-6 6 6"},[]]]]]],"\n"]],"\n"]],"\n",["p",{"style":"margin: 0; text-align: center; font-size: 13px; color: var(--soft)"},["Nothing you type is saved. A guide, not financial advice."]],"\n"]],"\n"]],"\n"]],"\n\n",["sc-if",{"value":"{{pdf}}","hint-placeholder-val":"{{ false }}"},["\n",["div",{"role":"dialog","aria-modal":"true","aria-label":"Your plan as a PDF","style":"position: fixed; inset: 0; z-index: 30; overflow: auto; background: rgba(12, 13, 8, 0.78); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px)"},["\n",["div",{"style":"width: 794px; margin: 40px auto 64px; display: flex; flex-direction: column; gap: 20px"},["\n",["div",{"style":"display: flex; align-items: center; gap: 12px"},["\n",["p",{"style":"flex: 1; margin: 0; font-size: 16px; color: #D8D0BE"},["goodground-plan-{{fileSlug}}.pdf"]],"\n",["button",{"type":"button","onClick":"{{closePdf}}","style":"height: 52px; padding: 0 22px; border: 1px solid rgba(243, 238, 230, 0.3); border-radius: 999px; background: transparent; color: #F3EEE6; font-family: 'Figtree', system-ui, sans-serif; font-size: 16px; font-weight: 500; cursor: pointer"},["Close"]],"\n",["button",{"type":"button","onClick":"{{download}}","style":"height: 52px; padding: 0 26px; border: none; border-radius: 999px; background: #F3EEE6; color: #1F2116; font-family: 'Figtree', system-ui, sans-serif; font-size: 16px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 10px"},[["svg",{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[["path",{"d":"M12 4v12"},[]],["path",{"d":"M6 11l6 6 6-6"},[]],["path",{"d":"M5 20h14"},[]]]],"{{downloadLabel}}"]],"\n"]],"\n\n",["article",{"style":"box-sizing: border-box; min-height: 1123px; padding: 64px 72px; background: #FBF9F5; color: #1F2116; display: flex; flex-direction: column; gap: 36px; box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45)"},["\n",["div",{"style":"display: flex; justify-content: space-between; align-items: baseline; padding-bottom: 20px; border-bottom: 1px solid #E2DACB"},["\n",["span",{"style":"font-family: 'Newsreader', Georgia, serif; font-size: 28px; font-weight: 500; letter-spacing: -0.02em"},["goodground"]],"\n",["span",{"style":"font-size: 13px; color: #6B6858"},["{{today}}"]],"\n"]],"\n",["div",{"style":"display: flex; flex-direction: column; gap: 10px"},["\n",["p",{"style":"margin: 0; font-family: 'Inter', system-ui, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.24em; text-transform: uppercase; color: #6B6858"},["Your plan  ·  {{label}}"]],"\n",["p",{"style":"margin: 6px 0 0; font-family: 'Newsreader', Georgia, serif; font-size: 24px; line-height: 1.2; color: #4C4E40"},["{{res.title}}"]],"\n",["p",{"style":"margin: 0; font-family: 'Newsreader', Georgia, serif; font-size: 64px; line-height: 1; letter-spacing: -0.02em"},["{{res.value}}"]],"\n",["p",{"style":"margin: 6px 0 0; font-size: 15px; line-height: 1.55; color: #4C4E40"},["{{res.sub}}"]],"\n"]],"\n",["sc-if",{"value":"{{hasStats}}","hint-placeholder-val":"{{ true }}"},["\n",["div",{"style":"display: grid; grid-template-columns: repeat({{statCols}}, minmax(0, 1fr)); border-top: 1px solid #E2DACB; border-bottom: 1px solid #E2DACB"},["\n",["sc-for",{"list":"{{res.stats}}","as":"t","hint-placeholder-count":"3"},["\n",["div",{"style":"padding: 18px 16px 18px 0; display: flex; flex-direction: column; gap: 4px"},["\n",["span",{"style":"font-size: 12px; color: #6B6858"},["{{t.label}}"]],"\n",["span",{"style":"font-family: 'Newsreader', Georgia, serif; font-size: 26px"},["{{t.value}}"]],"\n",["span",{"style":"font-size: 12px; line-height: 1.4; color: #6B6858"},["{{t.note}}"]],"\n"]],"\n"]],"\n"]],"\n"]],"\n",["div",{"style":"display: flex; flex-direction: column; gap: 16px"},["\n",["p",{"style":"margin: 0; font-size: 14px; font-weight: 600"},["{{res.chartTitle}}"]],"\n",["div",{"style":"display: flex; align-items: flex-end; gap: 10px; height: 170px"},["\n",["sc-for",{"list":"{{paperBars}}","as":"b","hint-placeholder-count":"7"},["\n",["div",{"style":"flex: 1; min-width: 0; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; gap: 6px"},["\n",["span",{"style":"font-size: 10px; font-weight: 600; white-space: nowrap"},["{{b.value}}"]],"\n",["div",{"style":"width: 100%; max-width: 56px; display: flex; flex-direction: column; border-radius: 4px 4px 0 0; overflow: hidden"},["\n",["div",{"style":"height: {{b.h2}}; background: #34371F"},[]],"\n",["div",{"style":"height: {{b.h1}}; background: {{b.c1}}"},[]],"\n"]],"\n",["span",{"style":"font-size: 10px; color: #6B6858; white-space: nowrap"},["{{b.label}}"]],"\n"]],"\n"]],"\n"]],"\n"]],"\n",["div",{"style":"display: flex; gap: 40px"},["\n",["div",{"style":"flex: 1.3; min-width: 0"},["\n",["p",{"style":"margin: 0 0 8px; font-size: 14px; font-weight: 600"},["Your next steps"]],"\n",["sc-for",{"list":"{{res.next}}","as":"x","hint-placeholder-count":"4"},["\n",["p",{"style":"margin: 0; display: flex; gap: 12px; padding: 10px 0; border-top: 1px solid #E2DACB; font-size: 13px; line-height: 1.5"},[["span",{"style":"flex: none; font-weight: 600; color: #6B6858"},["{{x.n}}"]],"{{x.text}}"]],"\n"]],"\n"]],"\n",["div",{"style":"flex: 1; min-width: 0"},["\n",["p",{"style":"margin: 0 0 8px; font-size: 14px; font-weight: 600"},["What you told us"]],"\n",["sc-for",{"list":"{{answers}}","as":"a","hint-placeholder-count":"5"},["\n",["p",{"style":"margin: 0; display: flex; justify-content: space-between; gap: 12px; padding: 10px 0; border-top: 1px solid #E2DACB; font-size: 13px; line-height: 1.4"},[["span",{"style":"color: #6B6858"},["{{a.q}}"]],["span",{"style":"font-weight: 600; text-align: right"},["{{a.a}}"]]]],"\n"]],"\n"]],"\n"]],"\n",["div",{"style":"display: flex; flex-direction: column; gap: 4px"},["\n",["p",{"style":"margin: 0 0 4px; font-size: 14px; font-weight: 600"},["How we worked this out"]],"\n",["sc-for",{"list":"{{res.assumptions}}","as":"a","hint-placeholder-count":"4"},["\n",["p",{"style":"margin: 0; font-size: 12px; line-height: 1.5; color: #4C4E40"},["{{a}}"]],"\n"]],"\n"]],"\n",["div",{"style":"flex: 1"},[]],"\n",["p",{"style":"margin: 0; padding-top: 16px; border-top: 1px solid #E2DACB; font-size: 11px; line-height: 1.5; color: #6B6858"},["goodground is independent and doesn’t sell financial products. This plan is a guide, not financial advice. Nothing you entered was stored."]],"\n"]],"\n"]],"\n"]],"\n"]],"\n\n"]]], (function () {
const DCLogic = GG.DCLogic;

class Component extends DCLogic {
themeNow() {
if (this.__theme) return this.__theme;
let stored = null;
try { stored = window.localStorage.getItem('gg-theme'); } catch (e) {}
const sys = (typeof matchMedia === 'function' && matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
this.__theme = stored === 'dark' || stored === 'light' ? stored : sys;
if (!stored && !this.__themeWatch && typeof matchMedia === 'function') {
const mq = matchMedia('(prefers-color-scheme: dark)');
this.__themeWatch = (e) => { let s2 = null; try { s2 = window.localStorage.getItem('gg-theme'); } catch (err) {} if (!s2) { this.__theme = e.matches ? 'dark' : 'light'; this.forceUpdate(); } };
try { mq.addEventListener('change', this.__themeWatch); } catch (e) {}
}
return this.__theme;
}
setTheme(t) {
this.__theme = t;
try { window.localStorage.setItem('gg-theme', t); } catch (e) {}
this.forceUpdate();
}
themeVals(onBg, onInk, offInk) {
const t = this.themeNow();
const mk = (id) => ({ on: t === id ? 'true' : 'false', bg: t === id ? onBg : 'transparent', ink: t === id ? onInk : offInk, pick: () => this.setTheme(id) });
return { theme: t, tLight: mk('light'), tDark: mk('dark') };
}

constructor(props) {
super(props);
this.state = this.fresh();
}
fresh() {
return { step: this.firstStep(this.defaults()), log: [], resume: null, vals: this.defaults(), draft: '', typing: false, done: false, save: 'ask', emailDraft: '', email: '', emailErr: false, pdf: false, downloaded: false };
}
firstStep(vals) { return 0; }
componentDidUpdate(prevProps, prevState) {
const grew = prevState.log.length !== this.state.log.length || prevState.typing !== this.state.typing || prevState.done !== this.state.done || prevState.save !== this.state.save;
if (grew && typeof window !== 'undefined' && window.scrollTo && !this.state.pdf) {
try { window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }); } catch (e) {}
}
}
componentWillUnmount() { clearTimeout(this.t); }
tools() {
const aed = (x) => 'AED ' + Math.round(Math.max(0, x || 0)).toLocaleString('en-US');
const short = (x) => {
x = Math.max(0, x || 0);
if (x >= 1e6) return 'AED ' + (x / 1e6).toFixed(x >= 1e7 ? 1 : 2).replace(/\.?0+$/, '') + 'M';
if (x >= 1e4) return 'AED ' + Math.round(x / 1e3) + 'k';
return aed(x);
};
const when = (m) => {
if (!isFinite(m)) return 'Not yet';
const d = new Date(); d.setDate(1); d.setMonth(d.getMonth() + Math.max(0, Math.round(m)));
return d.toLocaleString('en-US', { month: 'short', year: 'numeric' });
};
const span = (m) => {
if (!isFinite(m)) return 'never at this rate';
m = Math.max(0, Math.round(m));
const y = Math.floor(m / 12), mo = m % 12, out = [];
if (y) out.push(y + (y === 1 ? ' year' : ' years'));
if (mo || !y) out.push(mo + (mo === 1 ? ' month' : ' months'));
return out.join(' and ');
};
const line = (months, at) => {
const H = isFinite(months) ? Math.max(0, Math.min(months, 600)) : 60;
const cnt = H === 0 ? 1 : Math.min(7, H + 1);
const pts = [];
for (let i = 0; i < cnt; i++) {
const m = cnt === 1 ? 0 : Math.round(H * i / (cnt - 1));
if (pts.length && pts[pts.length - 1].m === m) continue;
pts.push(Object.assign({ m: m, label: i === 0 ? 'Now' : when(m) }, at(m)));
}
return pts;
};
return { aed, short, when, span, line };
}
renderVals() {
const f = this.tools();
const st = this.state;
const vals = st.vals;
const num = (k) => { const x = parseFloat(String(vals[k] == null ? '' : vals[k]).replace(/[^0-9.]/g, '')); return isFinite(x) ? x : 0; };
const P = this.plan(num, vals, f);
const SH = { kind: 'Goal', homePrice: 'Home price', netMonths: 'Safety net', income: 'Monthly income', savings: 'Saved for a home', save: 'Monthly saving', loans: 'Loan payments', cards: 'Card limits', age: 'Age', res: 'Status', goal: 'Saving for', spend: 'Monthly spending', saved: 'Saved so far', target: 'Target', monthly: 'Each month', cardBal: 'Card balance', cardRate: 'Card interest', loanBal: 'Personal loan', loanPay: 'Loan payment', carBal: 'Car loan', carPay: 'Car payment', extra: 'Extra each month', start: 'Starting amount', years: 'Time', style: 'Approach', safety: 'Safety net' };
const steps = P.steps;
const cur = steps[Math.min(st.step, steps.length - 1)];
const nextIndex = (from, v) => {
const P2 = this.plan((k) => { const x = parseFloat(String(v[k] == null ? '' : v[k]).replace(/[^0-9.]/g, '')); return isFinite(x) ? x : 0; }, v, f);
for (let i = from + 1; i < P2.steps.length; i++) if (!P2.steps[i].skip) return i;
return -1;
};
const planFor = (v) => this.plan((k) => { const x = parseFloat(String(v[k] == null ? '' : v[k]).replace(/[^0-9.]/g, '')); return isFinite(x) ? x : 0; }, v, f);
const ansText = (stp, val) => {
if (stp.options) { const o = stp.options.find((x) => x.id === String(val)); return o ? o.label : String(val || ''); }
if (val == null || String(val).trim() === '') return 'Skip';
const pf = stp.prefix == null ? 'AED' : stp.prefix;
return (pf ? pf + ' ' : '') + val + (stp.suffix ? ' ' + stp.suffix : '');
};
const answer = (value, text) => {
const v = Object.assign({}, st.vals, { [cur.key]: value });
let log = st.log.concat([{ q: cur.title, hint: cur.hint || '', a: text, short: SH[cur.key] || cur.title, key: cur.key, step: st.step }]);
let ni = nextIndex(st.step, v);
const keep = st.resume || [];
while (ni >= 0) {
const S2 = planFor(v).steps[ni];
const had = keep.find((l) => l.key === S2.key);
if (!had) break;
log = log.concat([{ q: S2.title, hint: S2.hint || '', a: ansText(S2, v[S2.key]), short: SH[S2.key] || S2.title, key: S2.key, step: ni }]);
ni = nextIndex(ni, v);
}
const left = ni >= 0 ? keep.filter((l) => !log.some((x) => x.key === l.key)) : [];
this.setState({ vals: v, log: log, draft: '', typing: true, resume: left.length ? left : null });
clearTimeout(this.t);
this.t = setTimeout(() => { if (ni < 0) this.setState({ typing: false, done: true }); else this.setState({ typing: false, step: ni }); }, ni < 0 ? 1100 : 650);
};
const editAt = (i) => {
if (st.typing) return;
const l = st.log[i];
const stp = steps[l.step] || {};
const sv = st.vals[l.key];
clearTimeout(this.t);
this.setState({ log: st.log.slice(0, i), resume: (st.resume || []).concat(st.log.slice(i + 1)), step: l.step, done: false, pdf: false, draft: !stp.options && sv != null ? String(sv) : '' });
};
const prefix = cur.prefix == null ? 'AED' : cur.prefix;
const fmtAns = (v) => (prefix ? prefix + ' ' : '') + v + (cur.suffix ? ' ' + cur.suffix : '');
const send = () => {
if (st.typing || st.done) return;
const v = String(st.draft || '').trim();
if (!v || !/[0-9]/.test(v)) return;
answer(v, fmtAns(v));
};
const msgs = [{ ai: true, me: false, text: P.intro.hello, hint: 'Nothing you tell me is saved.', hasHint: true }];
st.log.forEach((l, i) => {
msgs.push({ ai: true, me: false, text: l.q, hint: l.hint, hasHint: !!l.hint, canEdit: false });
msgs.push({ ai: false, me: true, text: l.a, hint: '', hasHint: false, canEdit: !st.typing, edit: () => editAt(i) });
});
if (!st.typing && !st.done) msgs.push({ ai: true, me: false, text: cur.title, hint: cur.hint || '', hasHint: !!cur.hint });
const after = [];
if (st.save === 'saved') {
after.push({ ai: false, me: true, text: st.email });
after.push({ ai: true, me: false, text: 'Done. I’ve saved this chat and sent a link to ' + st.email + '. You can delete it any time from that email.' });
}
if (st.save === 'declined') {
after.push({ ai: false, me: true, text: 'No thanks' });
after.push({ ai: true, me: false, text: 'No problem. Nothing has been saved. Download your PDF before you close this page if you’d like to keep your plan.' });
}
const chart = P.res.chart || [];
const top = Math.max(1, P.res.chartMax || 0, ...chart.map((b) => (b.a || 0) + (b.b || 0)));
const px = (v, h) => Math.max(0, Math.round(Math.min(v || 0, top) / top * h)) + 'px';
const nextSteps = (P.res.next || []).map((t, i) => ({ n: (i < 9 ? '0' : '') + (i + 1), text: t }));
const okEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
const saveChat = () => {
const e = String(st.emailDraft || '').trim();
if (!okEmail(e)) { this.setState({ emailErr: true }); return; }
this.setState({ save: 'saved', email: e, emailErr: false });
};
const d = new Date();
return Object.assign(this.themeVals('var(--a)', 'var(--b)', 'var(--muted)'), {
label: P.intro.label,
status: 'Nothing is saved',
msgs: msgs,
after: after,
typing: st.typing,
done: st.done,
composing: !st.done,
asking: st.done && st.save === 'ask',
q: { title: cur.title, placeholder: cur.placeholder ? 'e.g. ' + cur.placeholder : 'Type your answer', prefix: prefix, suffix: cur.suffix || '', optional: !!cur.optional },
isNumber: !cur.options,
isChoice: !!cur.options,
chips: (cur.options || []).map((o) => ({ label: o.label, note: o.note || '', hasNote: !!o.note, pick: () => { if (!st.typing) answer(o.id, o.label); } })),
draft: st.draft,
typeDraft: (e) => {
const raw = String(e.target.value || '');
if (cur.decimal) { this.setState({ draft: raw.replace(/[^0-9.]/g, '').slice(0, 8) }); return; }
const dg = raw.replace(/[^0-9]/g, '').slice(0, 12);
this.setState({ draft: dg ? Number(dg).toLocaleString('en-US') : '' });
},
draftKey: (e) => { if (e.key === 'Enter') { e.preventDefault(); send(); } },
send: send,
sendBg: String(st.draft || '').trim() ? 'var(--a)' : 'rgba(var(--fg-rgb), 0.35)',
skip: () => { if (!st.typing) answer('', 'Skip'); },
res: Object.assign({}, P.res, { next: nextSteps }),
firstSteps: nextSteps.slice(0, 4),
statCols: String((P.res.stats || []).length || 3),
hasStats: !!(P.res.stats && P.res.stats.length),
showSub: !P.res.slider && !!P.res.sub,
hasSlider: !!P.res.slider,
sl: P.res.slider ? (() => { const S = P.res.slider; const v = Math.max(S.min, Math.min(S.max, Math.round(num(S.key) / S.step) * S.step || S.min)); return { label: S.label, min: S.min, max: S.max, step: S.step, value: v, valueLabel: f.aed(num(S.key)), minLabel: f.aed(S.min), maxLabel: f.aed(S.max), onChange: (e) => { const x = Number(e.target.value) || 0; this.setState({ vals: Object.assign({}, this.state.vals, { [S.key]: x.toLocaleString('en-US') }) }); } }; })() : {},
hasToggle: !!P.res.toggle,
tg: P.res.toggle ? (() => { const T = P.res.toggle; const on = vals[T.key] !== 'off'; return { label: T.label, on: on, off: !on, goalLabel: T.goalLabel, goalAmt: T.goalAmt, efLabel: T.efLabel, efAmt: T.efAmt, efNote: T.efNote, offNote: T.offNote, checked: on ? 'true' : 'false', bg: on ? 'var(--hi)' : 'rgba(var(--fg-rgb), 0.2)', knob: on ? '21px' : '3px', knobBg: on ? 'var(--b)' : 'var(--a)', flip: () => this.setState({ vals: Object.assign({}, this.state.vals, { [T.key]: on ? 'off' : 'on' }) }) }; })() : {},
hasTools: !!(P.res.tools && P.res.tools.length),
toolsIntro: P.res.value === 'Not yet' ? 'Here\u2019s where I\u2019d start instead. Each one takes a couple of minutes.' : 'Want to get there sooner? These can help.',
openPdf: () => this.setState({ pdf: true, downloaded: false }),
closePdf: () => this.setState({ pdf: false }),
download: () => { this.setState({ downloaded: true }); setTimeout(() => { try { window.print(); } catch (e) {} }, 60); },
downloadLabel: st.downloaded ? 'Downloaded' : 'Download PDF',
fileSlug: P.intro.label.toLowerCase().replace(/[^a-z]+/g, '-'),
today: d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
paperBars: chart.map((b) => ({ label: b.label, value: b.value, h1: px(b.a, 130), h2: px(b.b, 130), c1: b.c1 === 'var(--hi)' ? '#34371F' : '#D3CAB5' })),
answers: st.log.map((l) => ({ q: l.short, a: l.a })),
restart: () => { clearTimeout(this.t); this.setState(this.fresh()); },
pdf: st.pdf,
emailDraft: st.emailDraft,
typeEmail: (e) => this.setState({ emailDraft: String(e.target.value || ''), emailErr: false }),
emailKey: (e) => { if (e.key === 'Enter') { e.preventDefault(); saveChat(); } },
emailBorder: st.emailErr ? 'var(--err)' : 'rgba(var(--fg-rgb), 0.3)',
emailErr: st.emailErr,
saveChat: saveChat,
decline: () => this.setState({ save: 'declined' })
});
}

defaults() { return {}; }
plan(num, vals, f) {
const cardBal = num('cardBal'), cardRate = (num('cardRate') || 3.25) / 100;
const loanBal = num('loanBal'), carBal = num('carBal'), extra = num('extra');
const fill = (bal, pay, r) => bal <= 0 ? 0 : (pay > 0 ? pay : bal * r + bal / 36);
const debts = [
{ id: 'card', name: 'Credit cards', bal: cardBal, r: cardRate, yr: cardRate * 12 },
{ id: 'loan', name: 'Personal loan', bal: loanBal, r: 0.12 / 12, yr: 0.12, pay: fill(loanBal, num('loanPay'), 0.01) },
{ id: 'car', name: 'Car loan', bal: carBal, r: 0.06 / 12, yr: 0.06, pay: fill(carBal, num('carPay'), 0.005) }
].filter((d) => d.bal > 0);
const total = debts.reduce((t, d) => t + d.bal, 0);
const due = (d) => d.id === 'card' ? Math.min(d.bal, Math.max(d.bal * 0.05, 100)) : Math.min(d.bal, d.pay);
const sim = (add, minOnly) => {
const ds = debts.map((d) => Object.assign({}, d, { done: 0 }));
const budget = ds.reduce((t, d) => t + due(d), 0) + add;
let interest = 0, m = 0;
const hist = [total];
while (m < 600 && ds.some((d) => d.bal > 0.5)) {
m++;
ds.forEach((d) => { if (d.bal > 0) { const i = d.bal * d.r; d.bal += i; interest += i; } });
let left = budget;
ds.forEach((d) => { if (d.bal <= 0) return; const p = minOnly ? due(d) : Math.min(due(d), Math.max(0, left)); d.bal -= p; left -= p; });
if (!minOnly) ds.slice().sort((a, b) => b.r - a.r).forEach((d) => { if (d.bal > 0 && left > 0) { const p = Math.min(d.bal, left); d.bal -= p; left -= p; } });
ds.forEach((d) => { if (d.bal <= 0.5 && !d.done) { d.bal = 0; d.done = m; } });
hist.push(ds.reduce((t, d) => t + d.bal, 0));
}
return { months: ds.every((d) => d.bal <= 0.5) ? m : Infinity, interest: interest, hist: hist, ds: ds, budget: budget };
};
const planR = sim(extra, false);
const base = sim(0, true);
const savedInt = Math.max(0, base.interest - planR.interest);
const sooner = isFinite(base.months) && isFinite(planR.months) ? base.months - planR.months : 0;
const order = planR.ds.slice().sort((a, b) => b.r - a.r);
let sub;
if (!total) sub = 'Add what you owe to see your plan.';
else if (!isFinite(planR.months)) sub = 'At these payments the interest outpaces what you pay. Add more each month to start bringing it down.';
else if (extra > 0 && !isFinite(base.months)) sub = 'Paying only the minimums, you would never clear it. Your plan gets you there in ' + f.span(planR.months) + '.';
else if (extra > 0) sub = 'That’s ' + f.span(sooner) + ' sooner and ' + f.aed(savedInt) + ' less interest than paying only the minimums.';
else sub = 'Paying what you pay now. Adding even AED 500 a month would bring this date forward.';
const next = order.map((d, i) => (i === 0 ? 'Clear your ' + d.name.toLowerCase() + ' first' : 'Then your ' + d.name.toLowerCase()) + ', at ' + Math.round(d.yr * 100) + '% a year. ' + (d.done ? 'Paid off by ' + f.when(d.done) + '.' : 'Not cleared at this rate yet.'));
next.push('Keep paying the minimum on everything else so no late fees are added.');
next.push('When a debt is cleared, move its payment onto the next one. That’s already built into this plan.');
if (cardBal > 0) next.push('Ask your bank about moving card debt to a lower rate loan or a balance transfer. Check the fees first.');
return {
file: '/plan/debt',
intro: {
eyebrow: 'Plan  ·  Clear debt', label: 'Clear debt',
hello: 'Let\u2019s find the quickest way out of debt for you. A few short questions about what you owe and what you pay.',
a: 'A clear way ', em: 'out of debt',
text: 'Add what you owe and what you pay. We’ll show you the order to pay things off, your debt free date and the interest you could save.',
gets: ['Your debt free date', 'The order to pay things off', 'How much interest you could save'],
img: '/assets/e58bfd44a2f3659c04680afa6a8fd6b0.jpg', alt: 'A woman with tea on a balcony overlooking Dubai at sunset'
},
steps: [
{ key: 'cardBal', title: 'What do you owe on credit cards?', hint: 'The total balance across all your cards. Put 0 if none.', placeholder: '30,000' },
{ key: 'cardRate', optional: true, skip: !cardBal, title: 'What interest do your cards charge?', hint: 'UAE cards often charge around 3% to 3.5% a month. Check your statement. Leave empty to use 3.25%.', prefix: '', suffix: '% a month', decimal: true, placeholder: '3.25' },
{ key: 'loanBal', title: 'What’s left on personal loans?', hint: 'The amount you still owe. Put 0 if none.', placeholder: '0' },
{ key: 'loanPay', skip: !loanBal, title: 'What do you pay on them each month?', hint: 'Your fixed monthly instalment.', placeholder: '0' },
{ key: 'carBal', title: 'What’s left on your car loan?', hint: 'Put 0 if you don’t have one.', placeholder: '0' },
{ key: 'carPay', skip: !carBal, title: 'And what do you pay on it each month?', hint: 'Your fixed monthly instalment.', placeholder: '0' },
{ key: 'extra', title: 'How much extra could you put towards debt each month?', hint: 'On top of what you already pay. Even AED 500 makes a real difference.', placeholder: '1,000' }
],
live: {
label: 'You could be debt free by',
value: total ? f.when(planR.months) : 'Add your debts',
rows: [
{ label: 'Total you owe', value: f.aed(total) },
{ label: 'Paying each month', value: f.aed(planR.budget) },
{ label: 'Interest on this plan', value: total ? f.aed(planR.interest) : '...' }
]
},
res: {
title: 'You could be debt free by',
value: total ? f.when(planR.months) : 'Now',
sub: sub,
stats: [
{ label: 'Total you owe', value: f.short(total), note: 'Across ' + debts.length + (debts.length === 1 ? ' debt' : ' debts') },
{ label: 'Interest on your plan', value: f.short(planR.interest), note: 'Paying ' + f.aed(planR.budget) + ' a month' },
{ label: 'Interest you save', value: f.short(savedInt), note: 'Compared with paying only the minimums' }
],
chartTitle: 'What you owe, month by month',
legendA: 'Left to pay',
swatchA: 'var(--hi)',
chart: f.line(planR.months, (m) => { const v = planR.hist[Math.min(m, planR.hist.length - 1)] || 0; return { a: v, value: f.short(v), c1: 'var(--hi)' }; }),
next: next,
assumptions: [
'Card interest of ' + (cardRate * 100).toFixed(2).replace(/\.?0+$/, '') + '% a month, with a minimum payment of 5% or AED 100.',
'Personal loans at about 12% a year and car loans at about 6% a year.',
'Extra money goes to the debt with the highest interest first. This saves the most.',
'No new borrowing while you clear what you owe.'
]
}
};
}
}

return Component;
})());
