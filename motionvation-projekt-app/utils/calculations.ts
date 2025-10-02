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
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #cacaca; -webkit-text-stroke: #cacaca; background-color: #171717}
    p.p3 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #d4d4d4; -webkit-text-stroke: #d4d4d4; background-color: #171717}
    p.p4 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Menlo; color: #cacaca; -webkit-text-stroke: #cacaca; background-color: #171717; min-height: 14.0px}
    span.s1 {font-kerning: none}
    span.s2 {font-kerning: none; color: #cacaca; -webkit-text-stroke: 0px #cacaca}
    span.s3 {font-kerning: none; color: #36c0a0; -webkit-text-stroke: 0px #36c0a0}
    span.s4 {font-kerning: none; color: #d4d4d4; -webkit-text-stroke: 0px #d4d4d4}
    span.s5 {font-kerning: none; color: #4689cc; -webkit-text-stroke: 0px #4689cc}
  </style>
</head>
<body>
<p class="p1"><span class="s1">export</span><span class="s2"> </span><span class="s1">interface</span><span class="s2"> </span><span class="s3">DailyEntry</span><span class="s2"> </span><span class="s4">{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>date</span><span class="s4">:</span><span class="s1"> </span><span class="s5">string</span><span class="s4">;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>steps</span><span class="s4">:</span><span class="s1"> </span><span class="s5">number</span><span class="s4">;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>pushups</span><span class="s4">:</span><span class="s1"> </span><span class="s5">number</span><span class="s4">;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>pullups</span><span class="s4">:</span><span class="s1"> </span><span class="s5">number</span><span class="s4">;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>optionalExerciseName?: </span><span class="s5">string</span><span class="s4">;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>optionalExerciseReps?: </span><span class="s5">number</span><span class="s4">;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>comment?: </span><span class="s5">string</span><span class="s4">;</span></p>
<p class="p3"><span class="s1">}</span></p>
<p class="p4"><span class="s1"></span><br></p>
<p class="p1"><span class="s1">export</span><span class="s2"> </span><span class="s1">interface</span><span class="s2"> </span><span class="s3">SummaryData</span><span class="s2"> </span><span class="s4">{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>weekly</span><span class="s4">:</span><span class="s1"> </span><span class="s4">{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>steps</span><span class="s4">:</span><span class="s1"> </span><span class="s5">number</span><span class="s4">;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>pushups</span><span class="s4">:</span><span class="s1"> </span><span class="s5">number</span><span class="s4">;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>pullups</span><span class="s4">:</span><span class="s1"> </span><span class="s5">number</span><span class="s4">;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span></span><span class="s4">};</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span>total</span><span class="s4">:</span><span class="s1"> </span><span class="s4">{</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>steps</span><span class="s4">:</span><span class="s1"> </span><span class="s5">number</span><span class="s4">;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>pushups</span><span class="s4">:</span><span class="s1"> </span><span class="s5">number</span><span class="s4">;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">    </span>pullups</span><span class="s4">:</span><span class="s1"> </span><span class="s5">number</span><span class="s4">;</span></p>
<p class="p2"><span class="s1"><span class="Apple-converted-space">  </span></span><span class="s4">};</span></p>
<p class="p3"><span class="s1">}</span></p>
<p class="p4"><span class="s1"></span><br></p>
</body>
</html>
