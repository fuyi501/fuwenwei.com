FROM nginx
COPY docs/.vuepress/dist /home
COPY fuwenwei.com.conf /etc/nginx/conf.d/fuwenwei.com.conf