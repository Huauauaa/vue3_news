<script setup>
const inputmodeValues = [
  'none',
  'text',
  'decimal',
  'numeric',
  'tel',
  'search',
  'email',
  'url',
];
</script>

<template>
  <fieldset>
    <legend>Attr</legend>
    <div>accept <input type="file" accept=".xlsx" /></div>
    <div>autofocus <input autofocus /></div>
    <div>
      inputmode
      <div v-for="(item, index) in inputmodeValues" :key="index">
        {{ item }}<input type="text" :inputmode="item" />
      </div>
    </div>
    <form action="">
      <div>pattern<input name="username" id="username" pattern="[0-9]+" /></div>
      <div>required<input type="text" name="username" required /></div>
      <div>
        autocomplete
        <input autocomplete />
      </div>
      <div>
        multiple
        <input type="file" multiple />
      </div>
      <div>
        download
        <a href="document.pdf" download>Download PDF</a>
      </div>
      <div>
        readonly
        <input type="text" id="sports" name="sports" value="golf" readonly />
      </div>
      <input type="submit" />
    </form>

    <div contenteditable="true">This text can be edited by the user.</div>

    <p hidden>This text is hidden</p>

    <p contenteditable="true" spellcheck="true">Myy spellinng is checkd</p>

    <footer><p translate="yes">Printing Works, Inc</p></footer>

    <img src="https://cdn.mysite.com/media/image.jpg" loading="lazy" />

    <img
      src="imageafound.png"
      onerror="this.onerror=null;this.src='imagenotfound.png';"
    />

    <video
      src="https://cdn.mysite.com/media/video.mp4"
      poster="image.png"
    ></video>

    <audio controls><source src="track11.mp3" type="audio/mpeg" /></audio>

    <video
      autoplaysrc="https://cdn.mysite.com/media/myvideo.mp4"
      poster="image.png"
    ></video>
    <audio loop><source src="track323.mp3" type="audio/mpeg" /></audio>

    <blockquote cite="https://mysite.com/original-source-url">
      <p>Some awesome quote</p>
    </blockquote>
    <p>
      My plans for 2021 include visiting Thailand,
      <del datetime="2021-01-01T18:21">creating 6 courses,</del>
      <ins datetime="2021-02-02T14:07">writing 12 articles.</ins>
    </p>
    <p>
      I will evaluate the completion on <time datetime="2021-12-31"> </time>.
    </p>
    <!-- <script src="script.js" async></script>
    <script src="script.js" defer></script> -->

    <!-- <script>
      const allowDrop = (e) => e.preventDefault();
      const drag = (e) => e.dataTransfer.setData('text', e.target.id);
      const drop = (e) => {
        var data = e.dataTransfer.getData('text');
        e.target.appendChild(document.getElementById(data));
      };
    </script>
    <div
      ondrop="drop(event)"
      ondragover="allowDrop(event)"
      style="width: 150px; height: 50px; padding: 10px; border: 1px solid black"
    ></div>
    <p id="drag" draggable="true" ondragstart="drag(event)">Drag me into box</p> -->
  </fieldset>
</template>

<style scoped></style>
