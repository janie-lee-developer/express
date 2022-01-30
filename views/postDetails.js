module.exports = (post) => {
    if (!post.id) {
        //opt A
        // throw new Error('Not Found');

        //opt B
        const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Wizard News</title>
      <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
      <header><img src="/logo.png"/>Wizard News</header>
      <div class="not-found">
        <p>Accio Page! 🧙‍♀️ ... Page Not Found</p>
        <img src="/dumbledore-404.gif" />
      </div>
    </body>
    </html>`
        return html;
    } else {
        let html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Wizard News</title>
          <link rel="stylesheet" href="/style.css" />
        </head>
        <body>
          <div class="news-list">
          <a href="/"><header><img src="/logo.png"/>Wizard News</header></a>
            <div class='news-item'>
              <p>
                <span class="news-position">${post.id}. ▲</span>${post.title}
                <small>(by ${post.name})</small>
              </p>
              <p>
              ${post.content}
              </p>
              <small class="news-info">
                ${post.upvotes} upvotes | ${post.date}
              </small>
            </div>
          </div>
        </body>
      </html>
      `;
        return html;
        
    }
}