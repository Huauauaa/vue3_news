<script setup>
const orgWidth = 150;
const siteWidth = 100;
</script>

<template>
  <fieldset>
    <legend>OrgStructure</legend>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100vh"
      style="background-color: #0a101f"
    >
      <defs>
        <pattern
          id="org"
          patternUnits="userSpaceOnUse"
          :height="orgWidth"
          :width="orgWidth"
        >
          <image
            x="0"
            y="5"
            :height="orgWidth"
            :width="orgWidth"
            xlink:href="../../assets/org.svg"
          ></image>
        </pattern>
        <pattern
          id="site"
          patternUnits="userSpaceOnUse"
          :height="siteWidth"
          :width="siteWidth"
        >
          <image
            x="5"
            y="5"
            :height="siteWidth"
            :width="siteWidth"
            xlink:href="../../assets/site.svg"
          ></image>
        </pattern>
      </defs>
      <g id="org-node">
        <rect width="150" :height="orgWidth" fill="url(#org)" />
        <text
          :x="orgWidth / 2"
          :y="orgWidth / 3"
          font-size="12"
          alignment-baseline="middle"
          text-anchor="middle"
          fill="#ffffffa6"
        >
          组织
        </text>
        <text
          :x="orgWidth / 2"
          :y="orgWidth / 2"
          font-size="10"
          alignment-baseline="middle"
          text-anchor="middle"
          fill="#fff"
        >
          组织名称-a
        </text>
      </g>
      <g id="site-node">
        <circle cx="50" cy="50" r="40" fill="url(#site)"></circle>
        <text
          :x="siteWidth / 2"
          :y="siteWidth / 3"
          text-anchor="middle"
          alignment-baseline="middle"
          font-size="10"
          fill="#ffffffa6"
        >
          部门
        </text>
        <text
          :x="siteWidth / 2"
          :y="siteWidth / 2"
          text-anchor="middle"
          alignment-baseline="middle"
          font-size="8"
          fill="#fff"
        >
          部门A
        </text>
      </g>
      <path
        d="M380 350 C 400 400, 420 320, 440 350"
        stroke="#4376FFFF"
        fill="transparent"
        stroke-width="2"
      />
      <use x="400" y="300" xlink:href="#org-node" />
      <use x="300" y="300" xlink:href="#site-node" />
    </svg>
  </fieldset>
</template>

<style scoped></style>
