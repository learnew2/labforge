<script lang="ts">
  import RFB from "@novnc/novnc/lib/rfb"
  import { onMount } from "svelte";

  let rfb: RFB | null = null
  let quality: number = 7
  let parent: HTMLElement;

  export let desktopCallback: (e: CustomEvent<{ name: string }>) => void;
  export let connectCallback: (state: boolean) => void
  export let url: string;
  export let onConnectCallback: () => Promise<void> = async () => {}
  export let onDisconnectCallback: () => Promise<void> = async () => {}

  onMount(() => {
    rfb = new RFB(parent, url)
    rfb.compressionLevel = 3
    rfb.qualityLevel = quality
    rfb.viewOnly = false
    rfb.dragViewport = false
    rfb.clipViewport = false
    rfb.scaleViewport = true

    rfb.addEventListener("desktopname", desktopCallback)
    rfb.addEventListener("connect", (_) => { connectCallback(true); onConnectCallback() })
    rfb.addEventListener("disconnect", (_) => { connectCallback(false); onDisconnectCallback() })

    return () => {
      if (rfb != null) {
        rfb.disconnect()
      }
    }
  })

  const sendCAD = () => {
    if (rfb != null) {
      rfb.sendCtrlAltDel()
    }
  }

  // currently not works
  const sendBuffer = () => {
    navigator.clipboard.readText()
      .then(text => {
        if (rfb != null) {
          rfb.clipboardPasteFrom(text)
        }
        console.log('Pasted content: ', text);
      })
      .catch(err => {
        console.error('Failed to read clipboard contents: ', err);
      });
  }
</script>

<div>
  <div class="flex flex-row items-center w-full">
    <button class="button" on:click={sendCAD}> Ctrl + Alt + Del </button>
    <!--<button class="button" on:click={sendBuffer}> Ctrl-V </button>-->
  </div>
  <div class="vnc-screen-container" bind:this={parent}></div>
</div>
