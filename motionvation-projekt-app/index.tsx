<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Times; -webkit-text-stroke: #000000; min-height: 14.0px}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #4689cc; -webkit-text-stroke: #4689cc; background-color: #171717}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #c27e65; -webkit-text-stroke: #c27e65; background-color: #171717}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #cacaca; -webkit-text-stroke: #cacaca; background-color: #171717; min-height: 14.0px}
    p.p5 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #cacaca; -webkit-text-stroke: #cacaca; background-color: #171717}
    p.p6 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #d4d4d4; -webkit-text-stroke: #d4d4d4; background-color: #171717}
    p.p7 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #36c0a0; -webkit-text-stroke: #36c0a0; background-color: #171717}
    span.s1 {font-kerning: none}
    span.s2 {font-kerning: none; color: #cacaca; -webkit-text-stroke: 0px #cacaca}
    span.s3 {font-kerning: none; color: #36c0a0; -webkit-text-stroke: 0px #36c0a0}
    span.s4 {font-kerning: none; color: #c27e65; -webkit-text-stroke: 0px #c27e65}
    span.s5 {font-kerning: none; color: #d4d4d4; -webkit-text-stroke: 0px #d4d4d4}
    span.s6 {font-kerning: none; color: #4689cc; -webkit-text-stroke: 0px #4689cc}
  </style>
</head>
<body>
<p class="p1"><span class="s1"></span><br></p>
<p class="p2"><span class="s1">import</span><span class="s2"> </span><span class="s3">React</span><span class="s2"> </span><span class="s1">from</span><span class="s2"> </span><span class="s4">'react'</span><span class="s5">;</span></p>
<p class="p3"><span class="s6">import</span><span class="s2"> </span><span class="s3">ReactDOM</span><span class="s2"> </span><span class="s6">from</span><span class="s2"> </span><span class="s1">'react-dom/client'</span><span class="s5">;</span></p>
<p class="p2"><span class="s1">import</span><span class="s2"> </span><span class="s3">App</span><span class="s2"> </span><span class="s1">from</span><span class="s2"> </span><span class="s4">'./App'</span><span class="s5">;</span></p>
<p class="p4"><span class="s1"></span><br></p>
<p class="p5"><span class="s6">const</span><span class="s1"> rootElement </span><span class="s5">=</span><span class="s1"> document</span><span class="s5">.</span><span class="s1">getElementById</span><span class="s5">(</span><span class="s4">'root'</span><span class="s5">);</span></p>
<p class="p5"><span class="s6">if</span><span class="s1"> </span><span class="s5">(!</span><span class="s1">rootElement</span><span class="s5">)</span><span class="s1"> </span><span class="s5">{</span></p>
<p class="p3"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s6">throw</span><span class="s2"> </span><span class="s6">new</span><span class="s2"> </span><span class="s3">Error</span><span class="s5">(</span><span class="s1">"Could not find root element to mount to"</span><span class="s5">);</span></p>
<p class="p6"><span class="s1">}</span></p>
<p class="p4"><span class="s1"></span><br></p>
<p class="p5"><span class="s6">const</span><span class="s1"> root </span><span class="s5">=</span><span class="s1"> </span><span class="s3">ReactDOM</span><span class="s5">.</span><span class="s1">createRoot</span><span class="s5">(</span><span class="s1">rootElement</span><span class="s5">);</span></p>
<p class="p5"><span class="s1">root</span><span class="s5">.</span><span class="s1">render</span><span class="s5">(</span></p>
<p class="p7"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s5">&lt;</span><span class="s1">React</span><span class="s5">.</span><span class="s1">StrictMode</span><span class="s5">&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">    </span></span><span class="s5">&lt;</span><span class="s3">App</span><span class="s1"> /&gt;</span></p>
<p class="p7"><span class="s2"><span class="Apple-converted-space">  </span></span><span class="s5">&lt;/</span><span class="s1">React</span><span class="s5">.</span><span class="s1">StrictMode</span><span class="s5">&gt;</span></p>
<p class="p6"><span class="s1">);</span></p>
<p class="p4"><span class="s1"></span><br></p>
</body>
</html>
