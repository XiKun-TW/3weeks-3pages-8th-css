## what is flex

<section>
    <small class="fragment">Flexbox Layout（Flexible Box）模块旨在提供一种更有效的方式来布置、对齐和分配容器中的元素之间的空间，即使其尺寸是未知的或动态变化的。（因此称之为 “flex”）。</small>
    <br><br>
    <small class="fragment">Flexbox Layout 是一个纪律严明的部队 </small>
</section>

<section>
    <small>Question: 一个纪律严明的部队应该有什么特点？</small>
    <small class="fragment">
        有<span class="color-red">长官（Flex Container）</span> 和 <span class="color-blue">士兵（Flex item）</span>，且士兵严格服从长官命令。
    </small>
</section>


<section>
    <pre><code data-trim data-noescape>
HTML
```
<div class="flex-box">
    <div class="flex-item">A</div>
    <div class="flex-item">B</div>
    <div class="flex-item">C</div>
</div>
```
</code></pre>
        <pre><code data-trim data-noescape>
.flex-box {
    display: flex;
    background-color: #3F3F3F;
}
.flex-item {
    color: #fff;
    width: 100px;
    height: 100px;
    border: 1px solid #3F3F3F;
    background-color: #cda150;
}
        </code></pre>
</section>

<section>
    <div class="flex-box">
        <div class="flex-item">A</div>
        <div class="flex-item">B</div>
        <div class="flex-item">C</div>
    </div>
</section>


<section>
    <small>Question: 一个长官（Flex Container）应该有什么特权？</small>
    <br>
    <ol style="font-size: 70%">
        <li>flex-direction</li>
        <li>justify-content</li>
        <li>align-items</li>
        <li>flex-wrap</li>
        <li>align-content</li>
    </ol>
</section>

<section>
    <p>1. flex-direction</p>
        <pre><code class="css" data-trim data-noescape>
.flex-box {
    display: flex;
    flex-direction: *row*;
    *[row-reverse|column|column-reverse]*
}
...
        </code></pre>
</section>

<section>
    <div class="example-panel">
        <div class="example-panel-individual">
            <small style="color:white">row-reverse</small>
            <div class="flex-box flex-direction-row-reverse">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
            </div>
        </div>
        <div class="example-panel-individual">
            <small style="color:white">column</small>
            <div class="flex-box flex-direction-column">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
            </div>
        </div>
        <div class="example-panel-individual">
            <small style="color:white">column-reverse</small>
            <div class="flex-box flex-direction-column-reverse">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
            </div>
        </div>
    </div>
</section>

<section>
<p>2. justify-content</p>
<pre><code class="css" data-trim data-noescape>
.flex-box {
    display: flex;
    justify-content: flex-start;
    *[flex-end|center|space-around|space-between]*
}
...
</code></pre>
</section>

<section>
    <div class="example-panel column">
        <div class="example-panel-individual">
            <small style="color:white">flex-start</small>
            <div class="flex-box">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
            </div>
        </div>
        <div class="example-panel-individual">
            <small style="color:white">flex-end</small>
            <div class="flex-box flex-justify-content-flex-end">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
            </div>
        </div>
        <div class="example-panel-individual">
            <small style="color:white">center</small>
            <div class="flex-box flex-justify-content-center">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="example-panel column">
        <div class="example-panel-individual">
            <small style="color:white">space-around</small>
            <div class="flex-box flex-justify-content-space-around">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
            </div>
        </div>
        <div class="example-panel-individual">
            <small style="color:white">space-between</small>
            <div class="flex-box flex-justify-content-space-between">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
            </div>
        </div>
    </div>
</section>

<section>
<p>3. align-items</p>
<pre><code class="css" data-trim data-noescape>
.flex-box {
    display: flex;
    align-items: stretch;
    *[flex-start|flex-end|center|baseline]*
}
...
</code></pre>
</section>

<section>
    <div class="example-panel">
        <div class="example-panel-individual">
            <small style="color:white">stretch</small>
            <div class="flex-box flex-align-items-stretch">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
            </div>
        </div>
        <div class="example-panel-individual">
            <small style="color:white">flex-start</small>
            <div class="flex-box flex-align-items-flex-start">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
            </div>
        </div>
        <div class="example-panel-individual">
            <small style="color:white">flex-end</small>
            <div class="flex-box flex-align-items-flex-end">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="example-panel">
        <div class="example-panel-individual">
            <small style="color:white">center</small>
            <div class="flex-box flex-align-items-center">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
                <div class="flex-item">D</div>
            </div>
        </div>
        <div class="example-panel-individual">
            <small style="color:white">baseline</small>
            <div class="flex-box flex-align-items-baseline">
                <div class="flex-item" style="padding-top: 3rem">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item" style="padding-top: 4rem">C</div>
                <div class="flex-item">D</div>
            </div>
        </div>
    </div>
</section>

<section>
<p>4. flex-wrap</p>
<pre><code class="css" data-trim data-noescape>
.flex-box {
    display: flex;
    flex-wrap: nowrap;
    *[wrap|wrap-reverse]*
}
...
</code></pre>
</section>

<section>
    <div class="example-panel">
        <div class="example-panel-individual">
            <small style="color:white">nowrap</small>
            <div class="flex-box">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
                <div class="flex-item">D</div>
            </div>
        </div>
        <div class="example-panel-individual">
            <small style="color:white">wrap</small>
            <div class="flex-box flex-wrap">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
                <div class="flex-item">D</div>
            </div>
        </div>
        <div class="example-panel-individual">
            <small style="color:white">wrap-reverse</small>
            <div class="flex-box flex-wrap-reverse">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
                <div class="flex-item">D</div>
            </div>
        </div>
    </div>
</section>

<section>
<p>4. align-content</p>
<pre><code class="css" data-trim data-noescape>
.flex-box {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    *[flex-start|flex-end|center|space-between|space-around]*
}
...
</code></pre>
</section>

<section>
    <div class="example-panel">
        <div class="example-panel-individual">
            <small style="color:white">stretch</small>
            <div class="flex-box flex-wrap">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
                <div class="flex-item">D</div>
            </div>
        </div>
        <div class="example-panel-individual">
            <small style="color:white">flex-start</small>
            <div class="flex-box flex-wrap flex-align-content-flex-start">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
                <div class="flex-item">D</div>
            </div>
        </div>
        <div class="example-panel-individual">
            <small style="color:white">flex-end</small>
            <div class="flex-box flex-wrap flex-align-content-flex-end">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
                <div class="flex-item">D</div>
            </div>
        </div>
    </div>
</section>

<section>
    <div class="example-panel">
        <div class="example-panel-individual">
            <small style="color:white">center</small>
            <div class="flex-box flex-wrap flex-align-content-center">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
                <div class="flex-item">D</div>
            </div>
        </div>
        <div class="example-panel-individual">
            <small style="color:white">space-around</small>
            <div class="flex-box flex-wrap flex-align-content-space-around">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
                <div class="flex-item">D</div>
            </div>
        </div>
        <div class="example-panel-individual">
            <small style="color:white">space-between</small>
            <div class="flex-box flex-wrap flex-align-content-space-between">
                <div class="flex-item">A</div>
                <div class="flex-item">B</div>
                <div class="flex-item">C</div>
                <div class="flex-item">D</div>
            </div>
        </div>
    </div>
</section>

<section>
    <small>Question: 一个士兵（Flex item）应该有什么特权？</small>
    <br>
    <ol style="font-size: 70%">
        <li>order</li>
        <li>flex-grow</li>
        <li>flex-shrink</li>
        <li>flex-basis</li>
        <li>align-self</li>
    </ol>
</section>

<section>
    <p>1. order</p>
    <pre><code class="css" data-trim data-noescape>
    .flex-box {
        display: flex;
    }
    .item-b {
        order: 1;
    }
    </code></pre>
    <div class="fargment flex-box">
        <div class="flex-item">A</div>
        <div class="flex-item" style="order:1">B</div>
        <div class="flex-item">C</div>
        <div class="flex-item">D</div>
    </div>
</section>
<section>
    <p>2. flex-grow</p>
    <pre><code class="css" data-trim data-noescape>
    .flex-box {
        display: flex;
    }
    .item-b {
        flex-grow: 1;
    }
    </code></pre>
    <div class="fargment flex-box">
        <div class="flex-item">A</div>
        <div class="flex-item" style="flex-grow:1">B</div>
        <div class="flex-item">C</div>
        <div class="flex-item">D</div>
    </div>
</section>

<section>
    <p>3. flex-shrink</p>
    <pre><code class="css" data-trim data-noescape>
    .flex-box {
        display: flex;
    }
    .item-b {
        flex-shrink: 0;
    }
    </code></pre>
    <div class="fargment flex-box">
        <div class="flex-item">A</div>
        <div class="flex-item" style="flex-shrink:0">B</div>
        <div class="flex-item">C</div>
        <div class="flex-item">D</div>
        <div class="flex-item">E</div>
        <div class="flex-item">F</div>
        <div class="flex-item">G</div>
        <div class="flex-item">H</div>
        <div class="flex-item">I</div>
        <div class="flex-item">J</div>
        <div class="flex-item">K</div>
        <div class="flex-item">L</div>
        <div class="flex-item">M</div>
        <div class="flex-item">N</div>
        <div class="flex-item">O</div>
        <div class="flex-item">P</div>
        <div class="flex-item">Q</div>
    </div>
</section>
<section>
    <p>4. flex-basis</p>
    <pre><code class="css" data-trim data-noescape>
    .flex-box {
        display: flex;
    }
    .item-b {
        align-self: auto;
        *[flex-start|flex-end|center|baseline|stretch;]*
    }
    </code></pre>
    <div class="fargment flex-box">
        <div class="flex-item" style="flex-basis: 25%;">A</div>
        <div class="flex-item" style="flex-basis: 25%;">B</div>
        <div class="flex-item" style="flex-basis: 25%;">C</div>
        <div class="flex-item" style="flex-basis: 25%;">D</div>
    </div>
</section>
<section>
    <p>5. align-self</p>
    <pre><code class="css" data-trim data-noescape>
    .flex-box {
        display: flex;
    }
    .item-a {
        align-self: auto;
        *[flex-start | flex-end | center | baseline | stretch]*
    }
    </code></pre>
</section>
<section>
    <div class="example-panel">
        <div class="example-panel-individual">
            <div class="flex-box">
                <div class="flex-item" style="align-self: flex-start;">
                    <small>flex-start</small><br>
                    A
                </div>
                <div class="flex-item" style="align-self: flex-end;">
                    <small>flex-end</small><br>
                    B
                </div>
                <div class="flex-item" style="align-self: center;">
                    <small>center</small><br>
                    C
                </div>
                <div class="flex-item" style="align-self: baseline;">
                    <small>baseline</small><br>
                    D
                </div>
                <div class="flex-item" style="align-self: stretch;height:auto">
                    <small>stretch</small><br>
                    E
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <small>Flex 布局可以嵌套使用，也就是说一个士兵也可以是别的士兵的长官</small>
</section>