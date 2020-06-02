function SliderSecond() {
    this.imagesUrls = [];
    this.currentImagesIndex = 0;
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImage = null;

    this.start = function (elId) {
        var that = this;
        var elSelector = '#' + elId;
        var el = document.querySelector(elSelector);

        this.showPrevBtn = el.querySelector('.show-prev-btn');
        this.showNextBtn = el.querySelector('.show-next-btn');
        this.slideImage = el.querySelector('.slide-imgs');


        //subscribe to events
        this.showPrevBtn.addEventListener('click', function (e) {
            that.onShowPrevBtn(e);
        });
        this.showNextBtn.addEventListener('click', function (e) {
            that.onShowNextBtn();
        });

        //create images array

        this.imagesUrls.push('https://avatars.mds.yandex.net/get-pdb/1352825/d736197d-8c42-47f3-b222-55f8aa0d1174/s1200?webp=false');
        this.imagesUrls.push('https://avatars.mds.yandex.net/get-pdb/1726346/cb176223-1340-47a3-9788-78b1ea4581f4/s1200?webp=false');
        this.imagesUrls.push('https://avatars.mds.yandex.net/get-pdb/875592/50871d75-9e89-4acb-b2b1-e8177b4c35ff/s1200?webp=false');
        this.imagesUrls.push('https://avatars.mds.yandex.net/get-pdb/1942074/c6fc8816-71e9-4d24-b08d-1be550f96947/s1200?webp=false');
        this.imagesUrls.push('https://a.d-cd.net/31f3c5u-960.jpg');


        var currentImagesIndex = 0;
        this.slideImage.src = this.imagesUrls[this.currentImagesIndex];
        this.showPrevBtn.disabled = true;


        this.onShowPrevBtn = function (e) {
            this.currentImagesIndex--;
            this.slideImage.src = this.imagesUrls[this.currentImagesIndex];
            this.showNextBtn.disabled = false;

            if (this.currentImagesIndex === 0) {
                this.showPrevBtn.disabled = true;
            };
        };

        this.onShowNextBtn = function (e) {
            this.currentImagesIndex++;
            this.slideImage.src = this.imagesUrls[this.currentImagesIndex];
            this.showPrevBtn.disabled = false;

            if (this.currentImagesIndex === (this.imagesUrls.length - 1)) {
                this.showNextBtn.disabled = true;
            };
        };
    };
};