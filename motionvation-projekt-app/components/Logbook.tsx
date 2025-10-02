<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2575.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #3874c0; -webkit-text-stroke: #3874c0; background-color: #121212}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #b36a52; -webkit-text-stroke: #b36a52; background-color: #121212}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #bebebe; -webkit-text-stroke: #bebebe; background-color: #121212; min-height: 14.0px}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #30b68f; -webkit-text-stroke: #30b68f; background-color: #121212}
    p.p5 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #bebebe; -webkit-text-stroke: #bebebe; background-color: #121212}
    p.p6 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #cacaca; -webkit-text-stroke: #cacaca; background-color: #121212}
    span.s1 {font-kerning: none}
    span.s2 {font-kerning: none; color: #bebebe; -webkit-text-stroke: 0px #bebebe}
    span.s3 {font-kerning: none; color: #30b68f; -webkit-text-stroke: 0px #30b68f}
    span.s4 {font-kerning: none; color: #b36a52; -webkit-text-stroke: 0px #b36a52}
    span.s5 {font-kerning: none; color: #cacaca; -webkit-text-stroke: 0px #cacaca}
    span.s6 {font-kerning: none; color: #3874c0; -webkit-text-stroke: 0px #3874c0}
    span.s7 {font-kerning: none; color: #97bb86; -webkit-text-stroke: 0px #97bb86}
    span.s8 {font-kerning: none; color: #e7142b; -webkit-text-stroke: 0px #e7142b}
  </style>
</head>
<body>
<p class="p1"><span class="s1">import</span><span class="s2"> </span><span class="s3">React</span><span class="s2"> </span><span class="s1">from</span><span class="s2"> </span><span class="s4">'react'</span><span class="s5">;</span></p>
<p class="p1"><span class="s1">import</span><span class="s2"> </span><span class="s1">type</span><span class="s2"> </span><span class="s5">{</span><span class="s2"> </span><span class="s3">DailyEntry</span><span class="s2"> </span><span class="s5">}</span><span class="s2"> </span><span class="s1">from</span><span class="s2"> </span><span class="s4">'../types'</span><span class="s5">;</span></p>
<p class="p2"><span class="s6">import</span><span class="s2"> </span><span class="s5">{</span><span class="s2"> </span><span class="s3">DailyEntryCard</span><span class="s2"> </span><span class="s5">}</span><span class="s2"> </span><span class="s6">from</span><span class="s2"> </span><span class="s1">'./DailyEntryCard'</span><span class="s5">;</span></p>
<p class="p3"><span class="s1"></span><br></p>
<p class="p4"><span class="s6">interface</span><span class="s2"> </span><span class="s1">LogbookProps</span><span class="s2"> </span><span class="s5">{</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">    </span>entries</span><span class="s5">:</span><span class="s1"> </span><span class="s3">DailyEntry</span><span class="s5">[];</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">    </span>isAuthenticated</span><span class="s5">:</span><span class="s1"> </span><span class="s6">boolean</span><span class="s5">;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">    </span>onEdit</span><span class="s5">:</span><span class="s1"> </span><span class="s5">(</span><span class="s1">entry</span><span class="s5">:</span><span class="s1"> </span><span class="s3">DailyEntry</span><span class="s5">)</span><span class="s1"> </span><span class="s5">=&gt;</span><span class="s1"> </span><span class="s6">void</span><span class="s5">;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">    </span>onDelete</span><span class="s5">:</span><span class="s1"> </span><span class="s5">(</span><span class="s1">date</span><span class="s5">:</span><span class="s1"> </span><span class="s6">string</span><span class="s5">)</span><span class="s1"> </span><span class="s5">=&gt;</span><span class="s1"> </span><span class="s6">void</span><span class="s5">;</span></p>
<p class="p6"><span class="s1">}</span></p>
<p class="p3"><span class="s1"></span><br></p>
<p class="p5"><span class="s6">export</span><span class="s1"> </span><span class="s6">const</span><span class="s1"> </span><span class="s3">Logbook</span><span class="s5">:</span><span class="s1"> </span><span class="s3">React</span><span class="s5">.</span><span class="s3">FC</span><span class="s5">&lt;</span><span class="s3">LogbookProps</span><span class="s5">&gt;</span><span class="s1"> </span><span class="s5">=</span><span class="s1"> </span><span class="s5">({</span><span class="s1"> entries</span><span class="s5">,</span><span class="s1"> isAuthenticated</span><span class="s5">,</span><span class="s1"> onEdit</span><span class="s5">,</span><span class="s1"> onDelete </span><span class="s5">})</span><span class="s1"> </span><span class="s5">=&gt;</span><span class="s1"> </span><span class="s5">{</span></p>
<p class="p1"><span class="s2"><span class="Apple-converted-space">    </span></span><span class="s1">return</span><span class="s2"> </span><span class="s5">(</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">        </span></span><span class="s5">&lt;</span><span class="s1">div</span><span class="s5">&gt;</span></p>
<p class="p2"><span class="s2"><span class="Apple-converted-space">            </span></span><span class="s5">&lt;</span><span class="s2">h2 className</span><span class="s5">=</span><span class="s1">"font-display text-5xl sm:text-6xl text-comic-yellow text-center drop-shadow-[3px_3px_0_rgba(0,0,0,0.75)] tracking-wider my-8"</span><span class="s5">&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                </span></span><span class="s3">Logbuch</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">            </span></span><span class="s5">&lt;/</span><span class="s1">h2</span><span class="s5">&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">            </span></span><span class="s5">&lt;</span><span class="s1">div className</span><span class="s5">=</span><span class="s4">"space-y-8"</span><span class="s5">&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                </span></span><span class="s5">{</span><span class="s1">entries</span><span class="s5">.</span><span class="s1">length </span><span class="s5">&gt;</span><span class="s1"> </span><span class="s7">0</span><span class="s1"> </span><span class="s5">?</span><span class="s1"> </span><span class="s5">(</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                    </span>entries</span><span class="s5">.</span><span class="s1">map</span><span class="s5">(</span><span class="s1">entry </span><span class="s5">=&gt;</span><span class="s1"><span class="Apple-converted-space"> </span></span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                        </span></span><span class="s5">&lt;</span><span class="s3">DailyEntryCard</span><span class="s1"><span class="Apple-converted-space"> </span></span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                            </span>key</span><span class="s5">={</span><span class="s1">entry</span><span class="s5">.</span><span class="s1">date</span><span class="s5">}</span><span class="s1"><span class="Apple-converted-space"> </span></span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                            </span>entry</span><span class="s5">={</span><span class="s1">entry</span><span class="s5">}</span><span class="s1"><span class="Apple-converted-space"> </span></span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                            </span>isAuthenticated</span><span class="s5">={</span><span class="s1">isAuthenticated</span><span class="s5">}</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                            </span>onEdit</span><span class="s5">={</span><span class="s1">onEdit</span><span class="s5">}</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                            </span>onDelete</span><span class="s5">={</span><span class="s1">onDelete</span><span class="s5">}</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                        </span>/&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                    </span></span><span class="s5">)</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                </span></span><span class="s5">)</span><span class="s1"> </span><span class="s5">:</span><span class="s1"> </span><span class="s5">(</span></p>
<p class="p2"><span class="s2"><span class="Apple-converted-space">                    </span></span><span class="s5">&lt;</span><span class="s2">div className</span><span class="s5">=</span><span class="s1">"bg-comic-cream p-6 rounded-xl border-4 border-comic-dark text-center"</span><span class="s5">&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                        </span></span><span class="s5">&lt;</span><span class="s1">p className</span><span class="s5">=</span><span class="s4">"font-bold text-xl"</span><span class="s5">&gt;</span><span class="s3">Noch</span><span class="s1"> keine </span><span class="s3">Eintr</span><span class="s8">ä</span><span class="s1">ge vorhanden</span><span class="s5">.&lt;/</span><span class="s1">p</span><span class="s5">&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                        </span></span><span class="s5">&lt;</span><span class="s1">p</span><span class="s5">&gt;</span><span class="s3">F</span><span class="s8">ü</span><span class="s1">ge einen neuen </span><span class="s3">Eintrag</span><span class="s1"> hinzu</span><span class="s5">,</span><span class="s1"> um zu beginnen</span><span class="s5">!&lt;/</span><span class="s1">p</span><span class="s5">&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                    </span></span><span class="s5">&lt;/</span><span class="s1">div</span><span class="s5">&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">                </span></span><span class="s5">)}</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">            </span></span><span class="s5">&lt;/</span><span class="s1">div</span><span class="s5">&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">        </span></span><span class="s5">&lt;/</span><span class="s1">div</span><span class="s5">&gt;</span></p>
<p class="p5"><span class="s1"><span class="Apple-converted-space">    </span></span><span class="s5">);</span></p>
<p class="p6"><span class="s1">};</span></p>
<p class="p3"><span class="s1"></span><br></p>
</body>
</html>
