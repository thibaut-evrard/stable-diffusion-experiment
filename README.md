# stable-diffusion-experiment

## installing stable diffusion

install stable diffusion on local machine from https://github.com/AUTOMATIC1111/stable-diffusion-webui
( tested on macbook pro 2018 -> instructions: https://github.com/AUTOMATIC1111/stable-diffusion-webui/discussions/5461 )

model:
https://huggingface.co/stabilityai/stable-diffusion-2

checkpoint file:
https://huggingface.co/stabilityai/stable-diffusion-2/resolve/main/768-v-ema.ckpt

config file:
https://github.com/Stability-AI/stablediffusion/raw/main/configs/stable-diffusion/v2-inference-v.yaml

_there is a version of stable diffusion available that already includes depth, but we will stay away from it to maximise learning_

-   model and config file should be placed in `stable-diffusion-webui/models/Stable-diffusion`
-   config file should be renamed to match model checkpoint: `768-v-ema.ckpt`

running the webui: `./webui.sh`
