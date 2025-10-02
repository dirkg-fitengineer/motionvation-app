<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #4689cc; -webkit-text-stroke: #4689cc; background-color: #171717}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #cacaca; -webkit-text-stroke: #cacaca; background-color: #171717; min-height: 14.0px}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #36c0a0; -webkit-text-stroke: #36c0a0; background-color: #171717}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #cacaca; -webkit-text-stroke: #cacaca; background-color: #171717}
    p.p5 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #d4d4d4; -webkit-text-stroke: #d4d4d4; background-color: #171717}
    p.p6 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #c27e65; -webkit-text-stroke: #c27e65; background-color: #171717}
    span.s1 {font-kerning: none}
    span.s2 {font-kerning: none; color: #cacaca; -webkit-text-stroke: 0px #cacaca}
    span.s3 {font-kerning: none; color: #36c0a0; -webkit-text-stroke: 0px #36c0a0}
    span.s4 {font-kerning: none; color: #c27e65; -webkit-text-stroke: 0px #c27e65}
    span.s5 {font-kerning: none; color: #d4d4d4; -webkit-text-stroke: 0px #d4d4d4}
    span.s6 {font-kerning: none; color: #4689cc; -webkit-text-stroke: 0px #4689cc}
    span.s7 {font-kerning: none; color: #ee2e38; -webkit-text-stroke: 0px #ee2e38}
  </style>
</head>
<body>
<p class="p1"><span class="s1">import</span><span class="s2"> </span><span class="s3">React</span><span class="s2"> </span><span class="s1">from</span><span class="s2"> </span><span class="s4">'react'</span><span class="s5">;</span></p>
<p class="p1"><span class="s1">import</span><span class="s2"> </span><span class="s1">type</span><span class="s2"> </span><span class="s5">{</span><span class="s2"> </span><span class="s3">SummaryData</span><span class="s2"> </span><span class="s5">}</span><span class="s2"> </span><span class="s1">from</span><span class="s2"> </span><span class="s4">'../types'</span><span class="s5">;</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p3"><span class="s6">interface</span><span class="s2"> </span><span class="s1">SummaryCardProps</span><span class="s2"> </span><span class="s5">{</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">    </span>title</span><span class="s5">:</span><span class="s1"> </span><span class="s6">string</span><span class="s5">;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">    </span>steps</span><span class="s5">:</span><span class="s1"> </span><span class="s6">number</span><span class="s5">;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">    </span>pushups</span><span class="s5">:</span><span class="s1"> </span><span class="s6">number</span><span class="s5">;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">    </span>pullups</span><span class="s5">:</span><span class="s1"> </span><span class="s6">number</span><span class="s5">;</span></p>
<p class="p5"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p4"><span class="s6">const</span><span class="s1"> </span><span class="s3">SummaryCard</span><span class="s5">:</span><span class="s1"> </span><span class="s3">React</span><span class="s5">.</span><span class="s3">FC</span><span class="s5">&lt;</span><span class="s3">SummaryCardProps</span><span class="s5">&gt;</span><span class="s1"> </span><span class="s5">=</span><span class="s1"> </span><span class="s5">({</span><span class="s1"> title</span><span class="s5">,</span><span class="s1"> steps</span><span class="s5">,</span><span class="s1"> pushups</span><span class="s5">,</span><span class="s1"> pullups </span><span class="s5">})</span><span class="s1"> </span><span class="s5">=&gt;</span><span class="s1"> </span><span class="s5">(</span></p>
<p class="p6"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s5">&lt;</span><span class="s2">div className</span><span class="s5">=</span><span class="s1">"bg-comic-cream p-6 rounded-xl border-4 border-comic-dark shadow-[8px_8px_0px_#2C2A29]"</span><span class="s5">&gt;</span></p>
<p class="p6"><span class="s2"><span class="Apple-converted-space">        </span></span><span class="s5">&lt;</span><span class="s2">h2 className</span><span class="s5">=</span><span class="s1">"font-display text-3xl sm:text-4xl text-center mb-4 text-comic-green tracking-wider"</span><span class="s5">&gt;{</span><span class="s2">title</span><span class="s5">}&lt;/</span><span class="s2">h2</span><span class="s5">&gt;</span></p>
<p class="p6"><span class="s2"><span class="Apple-converted-space">        </span></span><span class="s5">&lt;</span><span class="s2">div className</span><span class="s5">=</span><span class="s1">"space-y-3 font-semibold text-lg"</span><span class="s5">&gt;</span></p>
<p class="p6"><span class="s2"><span class="Apple-converted-space">            </span></span><span class="s5">&lt;</span><span class="s2">div className</span><span class="s5">=</span><span class="s1">"flex justify-between items-baseline"</span><span class="s5">&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">                </span></span><span class="s5">&lt;</span><span class="s1">span</span><span class="s5">&gt;</span><span class="s3">Schritte</span><span class="s1">:&lt;/span</span><span class="s5">&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">                </span></span><span class="s5">&lt;</span><span class="s1">span className</span><span class="s5">=</span><span class="s4">"font-bold text-2xl"</span><span class="s5">&gt;{</span><span class="s1">steps</span><span class="s5">.</span><span class="s1">toLocaleString</span><span class="s5">(</span><span class="s4">'de-DE'</span><span class="s5">)}&lt;/</span><span class="s1">span</span><span class="s5">&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">            </span></span><span class="s5">&lt;/</span><span class="s1">div</span><span class="s5">&gt;</span></p>
<p class="p6"><span class="s2"><span class="Apple-converted-space">            </span></span><span class="s5">&lt;</span><span class="s2">div className</span><span class="s5">=</span><span class="s1">"flex justify-between items-baseline"</span><span class="s5">&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">                </span></span><span class="s5">&lt;</span><span class="s1">span</span><span class="s5">&gt;</span><span class="s3">Liegest</span><span class="s7">ü</span><span class="s1">tze:&lt;/span</span><span class="s5">&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">                </span></span><span class="s5">&lt;</span><span class="s1">span className</span><span class="s5">=</span><span class="s4">"font-bold text-2xl"</span><span class="s5">&gt;{</span><span class="s1">pushups</span><span class="s5">.</span><span class="s1">toLocaleString</span><span class="s5">(</span><span class="s4">'de-DE'</span><span class="s5">)}&lt;/</span><span class="s1">span</span><span class="s5">&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">            </span></span><span class="s5">&lt;/</span><span class="s1">div</span><span class="s5">&gt;</span></p>
<p class="p6"><span class="s2"><span class="Apple-converted-space">            </span></span><span class="s5">&lt;</span><span class="s2">div className</span><span class="s5">=</span><span class="s1">"flex justify-between items-baseline"</span><span class="s5">&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">                </span></span><span class="s5">&lt;</span><span class="s1">span</span><span class="s5">&gt;</span><span class="s3">Klimmz</span><span class="s7">ü</span><span class="s1">ge:&lt;/span</span><span class="s5">&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">                </span></span><span class="s5">&lt;</span><span class="s1">span className</span><span class="s5">=</span><span class="s4">"font-bold text-2xl"</span><span class="s5">&gt;{</span><span class="s1">pullups</span><span class="s5">.</span><span class="s1">toLocaleString</span><span class="s5">(</span><span class="s4">'de-DE'</span><span class="s5">)}&lt;/</span><span class="s1">span</span><span class="s5">&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">            </span></span><span class="s5">&lt;/</span><span class="s1">div</span><span class="s5">&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">        </span></span><span class="s5">&lt;/</span><span class="s1">div</span><span class="s5">&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">    </span></span><span class="s5">&lt;/</span><span class="s1">div</span><span class="s5">&gt;</span></p>
<p class="p5"><span class="s1">);</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p3"><span class="s6">interface</span><span class="s2"> </span><span class="s1">SummaryDashboardProps</span><span class="s2"> </span><span class="s5">{</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">    </span>summary</span><span class="s5">:</span><span class="s1"> </span><span class="s3">SummaryData</span><span class="s5">;</span></p>
<p class="p5"><span class="s1">}</span></p>
<p class="p2"><span class="s1"></span><br></p>
<p class="p3"><span class="s6">export</span><span class="s2"> </span><span class="s6">const</span><span class="s2"> </span><span class="s1">SummaryDashboard</span><span class="s5">:</span><span class="s2"> </span><span class="s1">React</span><span class="s5">.</span><span class="s1">FC</span><span class="s5">&lt;</span><span class="s1">SummaryDashboardProps</span><span class="s5">&gt;</span><span class="s2"> </span><span class="s5">=</span><span class="s2"> </span><span class="s5">({</span><span class="s2"> summary </span><span class="s5">})</span><span class="s2"> </span><span class="s5">=&gt;</span><span class="s2"> </span><span class="s5">{</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">return</span><span class="s2"> </span><span class="s5">(</span></p>
<p class="p6"><span class="s2"><span class="Apple-converted-space">        </span></span><span class="s5">&lt;</span><span class="s2">div className</span><span class="s5">=</span><span class="s1">"grid md:grid-cols-2 gap-8 my-8"</span><span class="s5">&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">            </span></span><span class="s5">&lt;</span><span class="s3">SummaryCard</span><span class="s1"> title</span><span class="s5">=</span><span class="s4">"Diese Woche"</span><span class="s1"> </span><span class="s5">{...</span><span class="s1">summary</span><span class="s5">.</span><span class="s1">weekly</span><span class="s5">}</span><span class="s1"> /&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">            </span></span><span class="s5">&lt;</span><span class="s3">SummaryCard</span><span class="s1"> title</span><span class="s5">=</span><span class="s4">"Insgesamt"</span><span class="s1"> </span><span class="s5">{...</span><span class="s1">summary</span><span class="s5">.</span><span class="s1">total</span><span class="s5">}</span><span class="s1"> /&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">        </span></span><span class="s5">&lt;/</span><span class="s1">div</span><span class="s5">&gt;</span></p>
<p class="p4"><span class="s1"><span class="Apple-converted-space">    </span></span><span class="s5">);</span></p>
<p class="p5"><span class="s1">};</span></p>
<p class="p2"><span class="s1"></span><br></p>
</body>
</html>
