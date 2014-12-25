<h1><strong>NiceFileInput.js</strong> jQuery Plugin</h1>
<h2>jQuery PlugIn which makes easy to stylize with CSS the file inputs at your forms.</h2>

<h3>Live Demo</h3>
<p>
Live demo page: <a href="http://moro.es/projects/jquery-nicefileinput-js/" target="_blank">jQuery.NiceFileInput</a>
</p>

<h3>About</h3>
<p>
	Customizing the HTML file input elements (<code>&lt;input type="file" /&gt;</code>) is a time-consuming
	task which doesnt result the same way on different browsers. NiceFileInput makes things easy and transforms
	the fileinputs on 3 different HTML elements (a text input, a button and a div container) which you can
	style with CSS the way you'll do it normally.
</p>
<p>
	NiceFileInput.js is a script based on the previous work of <strong>Shaun Inman</strong>, who defined the concept behind NiceFileInput
	( <a href="http://www.shauninman.com/archive/2007/09/10/styling_file_inputs_with_css_and_the_dom">Styling File Inputs with CSS and the DOM</a> )
	and <strong>Mika Tuupola</strong>, who implemented nicely the idea in a jQuery plugin in some different way
	( <a href="http://www.appelsiini.net/projects/filestyle">FileStyle</a>), so most of this plugin credit goes for them.
</p>
<p>
	NiceFileInput degrades gracefully, if the user has no javascript enabled on the browser, a regular <code>&lt;input type="file" /&gt;</code> element
	will be there.
</p>

<h3>Requirements</h3>
<p>
	NiceFileInput requires the jQuery library, available at the JQuery website
	<a href="http://jquery.com" title="jQuery Library">jQuery.com</a>
	or through the Google CDN's Content Distribution Network
	<a href="http://code.google.com/intl/es/apis/libraries/devguide.html#jquery">Google Libraries API @ Google Code</a>
</p>

<h3>How to use it</h3>
<ol>
	<li>
		<p>First, make sure you link the jQuery library and the NiceFileInput plugin to your Web page.</p>
		<dl>
			<dt>By using your local copy of jQuery:</dt>
			<dd>
				<pre>&lt;script src="<em>/your_path/</em>jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="<em>/your_path/</em>jquery.nicefileinput.min.js"&gt;&lt;/script&gt;</pre>
			</dd>
			<dt>Or using the Google CDN's</dt>
			<dd>
				<pre>&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="<em>/your_path/</em>jquery.nicefileinput.min.js"&gt;&lt;/script&gt;</pre>
			</dd>
		</dl>
	</li>
	<li>
		<p>Insert the code which triggers the plugin on the jQuery Elements you want to apply it.</p>
		<pre>&lt;script type="text/javascript"&gt;
/* &lt;![CDATA[ */
$(document).ready(function(){
	// your code...
	$("<strong>input[type=file]</strong>").nicefileinput();
});
/* ]]&gt; */
&lt;/script&gt;</pre>
		<p>You may optionally set the defult label text:</p>
		<pre>$("input[type=file]").nicefileinput({
	label : 'Examinar...' // Spanish label
});</pre>
	</li>
</ol>

<h3>Customize the input file with CSS</h3>
<p>You can fully customize the look and feel of your file input in two ways:</p>
<dl>
	<dt>By using the same CSS code to stylize all your File Input elements through the following classes</dt>
	<dd>
		<pre>.NFI-wrapper {
	// the container div
}
.NFI-button {
	// the button div element
}
.NFI-filename {
	// the text input element which collects and shows the value
}</pre>
			</dd>
			<dt>Or setting the class atribute of the input file element you want to stylize individually</dt>
			<dd><pre>// define a class on your HTML file input element
// &lt;input type="file" <em>class="<strong>nice</strong>"</em> /&gt;
// so you can now write your CSS code as follows:
<em>.nice</em> {
	// the container div
}
<em>.nice .NFI-button</em> {
	// the button div element
}
<em>.nice .NFI-filename</em> {
	// the text input element which collects and shows the value
}</pre></dd>
		</dl>
