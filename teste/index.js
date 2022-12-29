<!doctype html>
<html>

<head>
    <meta name="generator" content="artificial.js">
    <meta charset="utf-8">
    <meta name="description" content="artificial.js is a library with a module focused on neural networks and genetic algorithms.">
    <meta name="keywords" content="rna, neuron, weight, bias, rede-neural, neural, neural-network, generation, genetic-algorithm, genetic, algorithm, pooling, normalize, learning, ai, ia, inteligencia, inteligence, artificial-inteligence, artificial, ArcTan, BentIdentity, BinaryStep, Gaussian, Identity, LeakyReLU, Swish, ReLU, SELU, Sigmoid, SigmoidRcional, HardSigmoid, SiLU, Sinc, Sinusoid, SoftSign, SoftPlus, TanH, PReLU, ELU">
    <meta name="author" content="Fabio Smuu">

    <meta property="og:url" content="https://artificial.js.org/reference.html">

    <meta property="og:title" content="Reference | artificial.js">
    <meta property="og:site_name" content="artificial.js">
    <meta name="theme-color" content="#71d7be">
    <meta property="og:description" content="artificial.js is a library with a module focused on neural networks and genetic algorithms.">

    <meta property="og:image" content="https://artificial.js.org/assets/img/logo.jpg">
    <meta property="og:image:type" content="image/jpg">
    <meta property="og:image:width" content="420">
    <meta property="og:image:height" content="420">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reference | artificial.js</title>

    <style> @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap'); </style>

    <link rel="shortcut icon" href="assets/img/favicon.svg" type="image/svg+xml">
    <link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">

    <link rel="preload" href="assets/js/addons/highlight/highlight.min.css" as="style">
    <link rel="preload" href="assets/js/addons/highlight/highlight.min.js" as="script">
    <link rel="preload" href="assets/css/main.css" as="style">
    <link rel="preload" href="assets/js/main.js" as="script">

    <link rel="stylesheet" href="assets/js/addons/highlight/highlight.min.css">
    <link rel="stylesheet" href="assets/css/main.css">
</head>

<body>
    <div class="bg-dark">
        <div class="container font text">
            <div class="row">
                <nav class="col-1 scrollable">
                    <ul class="font display">
                        <li class="header font size-18 bold">Documentation</li>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="get-started.html">Get Started</a></li>
                        <li class="active"><a>Reference</a></li>
                        <li><a href="examples">Examples</a></li>
                        <li><a href="versioning.html">Versioning</a></li>
                        <li class="header font size-18 bold">Reference</li>
                        <li><a href="neural-network.html">Neural Network</a></li>
                        <li><a href="genetic.html">Genteic</a></li>
                        <li><a href="generation.html">Generation</a></li>
                        <li class="header font size-18 bold">Activation Functions</li>
                        <li><a href="action-functions.html#pipe">Pipe</a></li>
                        <li><a href="action-functions.html#arctan">ArcTan</a></li>
                        <li><a href="action-functions.html#bentidentity">BentIdentity</a></li>
                        <li><a href="action-functions.html#binarystep">BinaryStep</a></li>
                        <li><a href="action-functions.html#gaussian">Gaussian</a></li>
                        <li><a href="action-functions.html#identity">Identity</a></li>
                        <li><a href="action-functions.html#leakyrelu">LeakyReLU</a></li>
                        <li><a href="action-functions.html#swish">Swish</a></li>
                        <li><a href="action-functions.html#relu">ReLU</a></li>
                        <li><a href="action-functions.html#selu">SELU</a></li>
                        <li><a href="action-functions.html#sigmoid">Sigmoid</a></li>
                        <li><a href="action-functions.html#sigmoidracional">SigmoidRacional</a></li>
                        <li><a href="action-functions.html#hardsigmoid">HardSigmoid</a></li>
                        <li><a href="action-functions.html#silu">SiLU</a></li>
                        <li><a href="action-functions.html#sinc">Sinc</a></li>
                        <li><a href="action-functions.html#sinusoid">Sinusoid</a></li>
                        <li><a href="action-functions.html#softsign">SoftSign</a></li>
                        <li><a href="action-functions.html#softplus">SoftPlus</a></li>
                        <li><a href="action-functions.html#tanh">TanH</a></li>
                        <li><a href="action-functions.html#prelu">PReLU</a></li>
                        <li><a href="action-functions.html#elu">ELU</a></li>
                    </ul>
                </nav>
                <main class="col-2 scrollable">
                    <div class="context">
                        <div class="logo"></div>
                        <h1 class="font size-28 light line">Reference</h1>
                        <span>this page contains any and all references available.</span>

                        <div class="font display light size-18 grid-col-3">
                            <div class="grid-list gap-20">
                                <span class="font bold size-22 header">RNA</span>
                                <span><a data-tooltip="method: the calc method returns the calculated output of the weights, bias and inputs." href="#" class="link">calc</a> (<a href="#" class="parans">weight</a>, <a href="#" class="parans">input</a>, <a href="#" class="parans">bias</a>)</span>
                                <span><a href="#" class="link">inputs</a> (<a href="#" class="parans">input</a>)</span>
                                <span><a href="#" class="link">createNeuron</a> (<a href="#" class="parans">input</a>, <a href="#" class="parans">count</a>)</span>
                                <span><a href="#" class="link">outputs</a> (<a href="#" class="parans">neuron</a>, <a href="#" class="parans">callback</a>, <a href="#" class="parans">count</a>)</span>
                                <span><a href="#" class="link">setWeight</a> (<a href="#" class="parans">neuron</a>, <a href="#" class="parans">weight</a>)</span>
                                <span><a href="#" class="link">genConcat</a> (<a href="#" class="parans">neuron</a>'s)</span>
                                <span><a href="#" class="link">splitGen</a> (<a href="#" class="parans">genome</a>, <a href="#" class="parans">neuron_count</a>, <a href="#" class="parans">input_count</a>)</span>
                            </div>
                            <div class="grid-list gap-20">
                                <span class="font bold size-22 header">Neuron</span>
                                <span><a href="#" class="parans">input</a></span>
                                <span><a href="#" class="parans">weight</a></span>
                                <span><a href="#" class="parans">bias</a></span>
                                <span><a href="#" class="parans">output</a></span>
                            </div>
                            <div class="grid-list gap-20">
                                <span class="font bold size-22 header">Genetics</span>
                                <span><a href="#" class="link">softmax</a> (<a href="#" class="parans">genome</a>)</span>
                                <span><a href="#" class="link">mutation</a> (<a href="#" class="parans">genome</a>, <a href="#" class="parans">count</a>)</span>
                                <span><a href="#" class="link">crossover</a> (<a href="#" class="parans">genome</a>, <a href="#" class="parans">genome</a>, <a href="#" class="parans">index</a>)</span>
                            </div>
                        </div>                        
                    </div>
                    <footer class="font size-14 light">
                        <div class="left">© 2022 artificial.js, Inc.</div>
                        <div class="right"><a href="#">GitHub</a> | <a href="https://www.npmjs.com/package/artificial.js?activeTab=readme" target="_blank">npm</a> | <a href="https://yarn.pm/artificial.js" target="_blank">yarn</a> | <a href="reference.html">Reference</a>.</div>
                    </footer>
                </main>
            </div>
        </div>
    </div>

    <script src="assets/js/addons/highlight/highlight.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
    <script src="assets/js/main.js"></script>
</body>
