export const linksContainer = document.querySelector('.links-container');
const titleInput = document.querySelector('#link-title');
const urlInput = document.querySelector('#link-url');
export const linksForm = document.querySelector('.links-form');
export const newLinkButton = document.querySelector('.links-subtitle');
export const closeFormButton = document.querySelector('.links-form-close');
export const links = JSON.parse(localStorage.getItem('links')) || [];

class Link {
  constructor({data, handleLinkDelete}, linkSelector){
    this.title = data.title;
    this.url = data.url;
    this.handleLinkDelete = handleLinkDelete;
    this._linkSelector = linkSelector;
  }

  _fillElementList () {
    const placeElement = document
    .querySelector(this._linkSelector)
    .content
    .querySelector('.link')
    .cloneNode(true);

    return placeElement;
  }

  generateLink() {
    this._element = this._fillElementList();
    const elementIcon = this._element.querySelector('.link-icon');
    const elementLinkTitle = this._element.querySelector('.link-title');
    const elementDeleteButton = this._element.querySelector('.link-delete');
    elementLinkTitle.textContent = this.title;
    elementLinkTitle.href = this.url;
    elementLinkTitle.target = "_blanck";
    elementIcon.src = `https://plus.google.com/_/favicon?domain_url=${this.url}`;
    elementDeleteButton.addEventListener('click', () => {
      this.handleLinkDelete();
    });
    return this._element;
  }

  linkDelete(){
    this._element.remove();
    this._element = null;
  }
}

export function createLink(data) {
  const link = new Link ({
  data: data,
  handleLinkDelete: () => {
    links.splice(links.indexOf(data, 0), 1);
    localStorage.setItem('links', JSON.stringify(links));
    link.linkDelete();
    }
  }, '.link-template');
  return link;
 }

export function formSubmit(evt) {
  evt.preventDefault(); 
  let newEl = {'title': titleInput.value, 'url': urlInput.value};
  const link = createLink(newEl);
  const placeElement = link.generateLink();
  linksContainer.append(placeElement);
  links.push(newEl);
  localStorage.setItem('links', JSON.stringify(links));
  titleInput.value = '';
  urlInput.value = '';
}

export function openForm() {
  linksForm.classList.add('links-form_active');
  newLinkButton.classList.add('links-subtitle_disable');
  closeFormButton.classList.add('links-form-close_disable');
}

export function closeForm() {
  linksForm.classList.remove('links-form_active');
  newLinkButton.classList.remove('links-subtitle_disable');
  closeFormButton.classList.remove('links-form-close_disable');
}