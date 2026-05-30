class End extends Phaser.Scene {
    constructor() {
        super('End');

        this.LAYOUT_PORTRAIT = {
            all_peoples: { x: 0, y: 0, scale: 1, depth: 1 },
            blank_bg_for_use: { x: 510, y: 705, scale: 0.208, depth: 1 },
            new_bg: { x: 486, y: 962, scale: 2.323, depth: 1 },
            counting_machine: { x: 209, y: 1272, scale: 0.092, depth: 100 },
            craft_1: { x: 564, y: 821, scale: 0.025, angle: -3.828, depth: 5 },
            craft_2: { x: 450, y: 1051, scale: 0.025, angle: -171.887, depth: 5 },
            craft_3: { x: 818, y: 1069, scale: 0.025, angle: 83.079, depth: 5 },
            craft_4: { x: 245, y: 1058, scale: 0.025, angle: -85.944, depth: 5 },
            craft_5: { x: 682, y: 834, scale: 0.025, angle: -74.485, depth: 5 },
            craft_6: { x: 258, y: 774, scale: 0.025, angle: -78.313, depth: 5 },
            craft_7: { x: 805, y: 995, scale: 0.025, angle: 80.214, depth: 5 },
            craft_8: { x: 511, y: 616, scale: 0.025, depth: 5 },
            craft_9: { x: 249, y: 694, scale: 0.025, angle: -80.214, depth: 5 },
            craft_10: { x: 726, y: 1058, scale: 0.025, angle: 166.158, depth: 5 },
            craft_11: { x: 426, y: 619, scale: 0.025, depth: 5 },
            craft_12: { x: 446, y: 846, scale: 0.025, angle: 179.518, depth: 5 },
            craft_13: { x: 264, y: 617, scale: 0.025, depth: 5 },
            craft_14: { x: 545, y: 1052, scale: 0.025, angle: -177.617, depth: 5 },
            craft_15: { x: 255, y: 966, scale: 0.025, angle: -83.079, depth: 5 },
            craft_16: { x: 358, y: 1051, scale: 0.025, angle: -171.887, depth: 5 },
            craft_17: { x: 522, y: 926, scale: 0.025, depth: 5 },
            craft_18: { x: 791, y: 813, scale: 0.025, angle: 74.485, depth: 5 },
            download_button: { x: 541, y: 1337, scale: 0.072, depth: 100 },
            fall: { x: 0, y: 0, scale: 1, depth: 1 },
            fighter_1: { x: 46, y: 740, scale: 0.071, angle: 5.73, depth: 5 },
            fighter_2: { x: 589, y: 614, scale: 0.03, depth: 5 },
            fighter_3: { x: 797, y: 908, scale: 0.03, angle: 77.349, depth: 5 },
            fighter_4: { x: 346, y: 717, scale: 0.03, depth: 5 },
            fighter_5: { x: 1540, y: 740, scale: 0.071, angle: -5.73, depth: 5 },
            fighter_6: { x: 792, y: 612, scale: 0.028, angle: 68.755, depth: 5 },
            fighter_7: { x: 664, y: 940, scale: 0.03, angle: 83.079, depth: 5 },
            fighter_8: { x: 393, y: 954, scale: 0.03, angle: -83.079, depth: 5 },
            fighter_9: { x: 255, y: 856, scale: 0.03, angle: -74.485, depth: 5 },
            fighter_10: { x: 782, y: 714, scale: 0.03, angle: 80.214, depth: 5 },
            fighter_11: { x: 642, y: 742, scale: 0.03, angle: -80.214, depth: 5 },
            fighter_12: { x: 348, y: 617, scale: 0.03, angle: -2.865, depth: 5 },
            fighter_13: { x: 497, y: 737, scale: 0.03, angle: -94.538, depth: 5 },
            fighter_14: { x: 643, y: 1055, scale: 0.03, angle: -179.518, depth: 5 },
            fighter_15: { x: 1021, y: 740, scale: 0.071, angle: -5.73, depth: 5 },
            fighter_16: { x: 690, y: 618, scale: 0.03, angle: -2.865, depth: 5 },
            fighter_17: { x: 367, y: 797, scale: 0.03, angle: -80.214, depth: 5 },
            fighter_18: { x: -481, y: 740, scale: 0.03, angle: 5.73, depth: 5 },
            fighter_19: { x: 1278, y: 740, scale: 0.071, angle: -5.729, depth: 5 },
            fighter_20: { x: -210, y: 740, scale: 0.071, angle: 5.73, depth: 5 },
            hand_pointer: { x: 0, y: 0, scale: 1, depth: 200 },
            iq_counter: { x: 867, y: 1276, scale: 0.075, depth: 100 },
            parking_points_1: { x: 704, y: 412, scale: 0.121, depth: 2 },
            parking_points_2: { x: 814, y: 412, scale: 0.121, depth: 2 },
            parking_points_3: { x: 600, y: 412, scale: 0.121, depth: 2 },
            parking_1: { x: 161, y: 412, scale: 0.121, depth: 2 },
            parking_2: { x: 273, y: 412, scale: 0.121, depth: 2 },
            parking_3: { x: 384, y: 412, scale: 0.121, depth: 2 },
            parking_4: { x: 493, y: 412, scale: 0.121, depth: 2 },
            rettry: { x: 0, y: 0, scale: 1, depth: 100 },
            welcome_text: { x: 0, y: 0, scale: 1, depth: 100 },
        };

        this.LAYOUT_LANDSCAPE = {
            all_peoples: { x: 1289, y: 98, scale: 0.057, depth: 2 },
            blank_bg_for_use: { x: 960, y: 533, scale: 0.187, depth: 1 },
            new_bg: { x: 959, y: 794, scale: 2.009, depth: 1 },
            counting_machine: { x: 278, y: 938, scale: 0.108, depth: 100 },
            craft_1: { x: 984, y: 656, scale: 0.025, depth: 10 },
            craft_2: { x: 1017, y: 873, scale: 0.025, angle: -177.617, depth: 5 },
            craft_3: { x: 759, y: 775, scale: 0.025, angle: -83.079, depth: 5 },
            craft_4: { x: 1173, y: 884, scale: 0.025, angle: -171.887, depth: 5 },
            craft_5: { x: 906, y: 487, scale: 0.025, angle: 2.865, depth: 5 },
            craft_6: { x: 908, y: 698, scale: 0.025, angle: 179.518, depth: 5 },
            craft_7: { x: 769, y: 485, scale: 0.025, depth: 10 },
            craft_8: { x: 991, y: 487, scale: 0.025, angle: -2.865, depth: 5 },
            craft_9: { x: 1251, y: 878, scale: 0.025, angle: 80.214, depth: 5 },
            craft_10: { x: 820, y: 877, scale: 0.025, angle: -166.158, depth: 5 },
            craft_11: { x: 1117, y: 657, scale: 0.025, angle: -77.349, depth: 5 },
            craft_12: { x: 1223, y: 640, scale: 0.025, angle: 85.944, depth: 5 },
            craft_13: { x: 1245, y: 792, scale: 0.025, angle: 91.673, depth: 5 },
            craft_14: { x: 920, y: 879, scale: 0.025, angle: -174.752, depth: 5 },
            craft_15: { x: 756, y: 549, scale: 0.025, angle: -69.718, depth: 5 },
            craft_16: { x: 747, y: 857, scale: 0.025, angle: -80.214, depth: 5 },
            craft_17: { x: 1000, y: 762, scale: 0.025, angle: -94.538, depth: 5 },
            craft_18: { x: 751, y: 609, scale: 0.025, angle: -90.079, depth: 5 },
            download_button: { x: 1208, y: 1340, scale: 0.125, depth: 100 },
            fall: { x: 0, y: 0, scale: 0.02, depth: 1 },
            fighter_1: { x: 577, y: 601, scale: 0.06, angle: 5.73, depth: 5 },
            fighter_2: { x: 873, y: 788, scale: 0.025, angle: -86.907, depth: 5 },
            fighter_3: { x: 1422, y: 601, scale: 0.06, angle: -5.729, depth: 5 },
            fighter_4: { x: 834, y: 570, scale: 0.025, angle: -8.487, depth: 5 },
            fighter_5: { x: 1639, y: 601, scale: 0.06, angle: -8.594, depth: 5 },
            fighter_6: { x: 346, y: 601, scale: 0.06, angle: 5.73, depth: 5 },
            fighter_7: { x: 1119, y: 760, scale: 0.025, angle: 82.115, depth: 5 },
            fighter_8: { x: 1075, y: 487, scale: 0.025, depth: 5 },
            fighter_9: { x: 1238, y: 716, scale: 0.025, angle: 77.349, depth: 5 },
            fighter_10: { x: 1153, y: 497, scale: 0.025, angle: -5.623, depth: 5 },
            fighter_11: { x: 1052, y: 579, scale: 0.025, angle: -80.214, depth: 5 },
            fighter_12: { x: 1233, y: 495, scale: 0.025, angle: 68.755, depth: 5 },
            fighter_13: { x: 933, y: 582, scale: 0.025, angle: -94.538, depth: 5 },
            fighter_14: { x: 1097, y: 884, scale: 0.025, angle: -177.617, depth: 5 },
            fighter_15: { x: 751, y: 684, scale: 0.025, angle: -77.349, depth: 5 },
            fighter_16: { x: 1222, y: 574, scale: 0.025, angle: 77.349, depth: 5 },
            fighter_17: { x: 844, y: 643, scale: 0.025, angle: -91.673, depth: 5 },
            fighter_18: { x: 839, y: 484, scale: 0.025, angle: -11.352, depth: 5 },
            fighter_19: { x: 1867, y: 601, scale: 0.06, angle: -5.73, depth: 5 },
            fighter_20: { x: 116, y: 601, scale: 0.06, angle: 5.729, depth: 5 },
            hand_pointer: { x: 68, y: 29, scale: 0.02, depth: 200 },
            iq_counter: { x: 1000, y: 938, scale: 0.115, depth: 100 },
            parking_points_1: { x: 1058, y: 320, scale: 0.106, depth: 2 },
            parking_points_2: { x: 1239, y: 318, scale: 0.106, depth: 2 },
            parking_points_3: { x: 1148, y: 319, scale: 0.106, depth: 2 },
            parking_1: { x: 681, y: 319, scale: 0.106, depth: 2 },
            parking_2: { x: 777, y: 319, scale: 0.106, depth: 2 },
            parking_3: { x: 873, y: 319, scale: 0.106, depth: 2 },
            parking_4: { x: 967, y: 320, scale: 0.106, depth: 2 },
            rettry: { x: 0, y: 0, scale: 0.02, depth: 100 },
            welcome_text: { x: 0, y: 0, scale: 0.02, depth: 100 },
            parking_points: { x: 1206, y: 312, scale: 0.117, depth: 2 },
            parking: { x: 790, y: 312, scale: 0.116, depth: 2 },
        };

        this.DESIGN_LANDSCAPE = { width: 1920, height: 1080 };
        this.DESIGN_PORTRAIT  = { width: 1080, height: 1920 };
    }

    preload() {
        this.loadAllTheAssets();
    }

    init(data = {}) {
        this.result = data.result || 'end';
    }

    create() {
        this.createGameUI();
        this.createEndOverlay();
        this.onOrientationChange();
        this.cameras.main.fadeIn(350, 0, 0, 0);
        this.uiEditor = new UIEditor(this, {
            enabled: false,
            keys: this.getEditorKeys(),
            gridSize: 10,
            fileName: 'end.js'
        });
    }

    getEditorKeys() {
        return [
            'all_peoples',
            'blank_bg_for_use',
            'new_bg',
            'parking_1', 'parking_2', 'parking_3', 'parking_4',
            'parking_points_1', 'parking_points_2', 'parking_points_3',
            ...Array.from({ length: 18 }, (_, i) => `craft_${i + 1}`),
            ...Array.from({ length: 20 }, (_, i) => `fighter_${i + 1}`),
            'counting_machine',
            'download_button',
            'iq_counter',
            'fall',
            'hand_pointer',
            'rettry',
            'welcome_text'
        ];
    }

    createGameUI() {
        this.gameUIContainer = this.add.container(0, 0).setDepth(1);

        const addWorld = (key, alpha = 1) => {
            this[key] = this.add.image(0, 0, key).setOrigin(0.5).setAlpha(alpha);
            this.gameUIContainer.add(this[key]);
            return this[key];
        };

        addWorld('all_peoples', 0);
        addWorld('blank_bg_for_use', 0);
        addWorld('new_bg');

        for (let i = 1; i <= 4; i++) addWorld(`parking_${i}`);
        addWorld('parking_points_1');
        addWorld('parking_points_2');
        addWorld('parking_points_3');

        for (let i = 1; i <= 18; i++) addWorld(`craft_${i}`);
        for (let i = 1; i <= 20; i++) addWorld(`fighter_${i}`);

        // this.iq_counter = this.add.image(0, 0, 'iq_counter').setOrigin(0.5).setAlpha(1).setDepth(100);
        // this.counting_machine = this.add.image(0, 0, 'counting_machine').setOrigin(0.5).setAlpha(1).setDepth(100);
        this.download_button = this.add.image(0, 0, 'download_button').setOrigin(0.5).setAlpha(1).setDepth(100);

        this.iqText = this.add.text(0, 0, 'IQ = 20', {
            fontFamily: 'Arial', fontSize: '36px', fontStyle: 'bold', color: '#000000'
        }).setOrigin(0.5).setDepth(101);

        this.peopleLeftText = this.add.text(0, 0, '291\nLEFT', {
            fontFamily: 'Arial', fontSize: '24px', fontStyle: 'bold', color: '#000000', align: 'center'
        }).setOrigin(0.5).setDepth(101);

        // this.fall = this.add.image(0, 0, 'fall').setOrigin(0.5).setAlpha(0).setDepth(1001);
        // this.hand_pointer = this.add.image(0, 0, 'hand_pointer').setOrigin(0.5).setAlpha(0).setDepth(200);
        this.rettry = this.add.image(0, 0, 'rettry').setOrigin(0.5).setAlpha(0).setDepth(100);
        // this.welcome_text = this.add.image(0, 0, 'welcome_text').setOrigin(0.5).setAlpha(0).setDepth(100);
    }

    createEndOverlay() {
        this.isRestarting = false;
        this.endOverlay = this.add.rectangle(0, 0, 1, 1, 0x000000, 0.78)
            .setOrigin(0)
            .setDepth(1000);

        this.rettry
            .setAlpha(1)
            .setDepth(1001)
            .setInteractive({ useHandCursor: true });

        this.download_button
            .setAlpha(1)
            .setDepth(1001)
            .setInteractive({ useHandCursor: true });

        this.rettry.on('pointerdown', () => this.restartGame());
    }

    updateEndOverlayLayout() {
        if (!this.endOverlay || !this.rettry || !this.download_button) return;

        const width = this.scale.width;
        const height = this.scale.height;
        this.endOverlay
            .setPosition(0, 0)
            .setDisplaySize(width, height);

        const retrySize = Math.max(this.rettry.width || 1, this.rettry.height || 1);
        const retryScale = (Math.min(width, height) * 0.34) / retrySize;
        this.rettry
            .setPosition(width / 2, height / 2)
            .setScale(retryScale)
            .setDepth(1001);

        const buttonSize = Math.max(this.download_button.width || 1, this.download_button.height || 1);
        const buttonScale = (Math.min(width, height) * 0.21) / buttonSize;
        this.download_button
            .setPosition(width / 2, height - (height * 0.13))
            .setScale(buttonScale)
            .setDepth(1001);
    }

    restartGame() {
        if (this.isRestarting) return;

        this.isRestarting = true;
        this.rettry.disableInteractive();
        this.download_button.disableInteractive();
        this.cameras.main.fadeOut(350, 0, 0, 0);
        this.cameras.main.once('camerafadeoutcomplete', () => {
            this.scene.start('Game');
        });
    }

    onOrientationChange() {
        this.reflowForResize({ width: this.scale.width, height: this.scale.height });
        this.scale.on('resize', this.reflowForResize, this);
    }

    reflowForResize(gameSize = { width: this.scale.width, height: this.scale.height }) {
        const vw = gameSize.width;
        const vh = gameSize.height;
        const isLandscape = vw > vh;
        const layout = isLandscape ? this.LAYOUT_LANDSCAPE : this.LAYOUT_PORTRAIT;
        const design = isLandscape ? this.DESIGN_LANDSCAPE : this.DESIGN_PORTRAIT;

        const UI_KEYS = ['iq_counter', 'download_button', 'counting_machine'];

        for (const key in layout) {
            if (!this[key] || !layout.hasOwnProperty(key)) continue;

            const { x, y, scale: s, alpha, depth, angle, r } = layout[key];

            if (UI_KEYS.includes(key)) {
                this[key].setPosition((x / design.width) * vw, (y / design.height) * vh);
                const globalScale = vh / design.height;
                if (s !== undefined) this[key].setScale(s * globalScale);
                if (angle !== undefined) this[key].setAngle(angle);
                else if (r !== undefined) this[key].setRotation(r);
                if (alpha !== undefined) this[key].setAlpha(alpha);
                if (depth !== undefined) this[key].setDepth(depth);
                continue;
            }

            this[key].setPosition(x, y);
            if (angle !== undefined) this[key].setAngle(angle);
            else if (r !== undefined) this[key].setRotation(r);
            if (s !== undefined) this[key].setScale(s);
            if (alpha !== undefined) this[key].setAlpha(alpha);
            if (depth !== undefined) this[key].setDepth(depth);
        }

        const scale = vh / design.height;
        const scaledContentWidth = design.width * scale;
        const offsetX = (vw - scaledContentWidth) / 2;
        const offsetY = (vh - design.height * scale) / 2;

        if (this.gameUIContainer) {
            this.gameUIContainer.setScale(scale);
            this.gameUIContainer.setPosition(offsetX, offsetY);
        }

        if (this.iqText && layout.iq_counter) {
            this.iqText.setPosition(
                (layout.iq_counter.x / design.width) * vw,
                (layout.iq_counter.y / design.height) * vh
            );
        }

        if (this.peopleLeftText && layout.counting_machine) {
            this.peopleLeftText.setPosition(
                (layout.counting_machine.x / design.width) * vw,
                (layout.counting_machine.y / design.height) * vh
            );
        }

        this.updateEndOverlayLayout();
    }

    loadAllTheAssets() {
        const assets = [
            { key: 'all_peoples', path: 'assets/All Peoples.png' },
            { key: 'blank_bg_for_use', path: 'assets/Blank BG for Use.png' },
            { key: 'new_bg', path: 'assets/new_bg.png' },
            { key: 'counting_machine', path: 'assets/Counting Machine.png' },
            { key: 'craft_1', path: 'assets/Craft 1.png' },
            { key: 'craft_2', path: 'assets/Craft 2.png' },
            { key: 'craft_3', path: 'assets/Craft 3.png' },
            { key: 'craft_4', path: 'assets/Craft 4.png' },
            { key: 'craft_5', path: 'assets/Craft 5.png' },
            { key: 'craft_6', path: 'assets/Craft 6.png' },
            { key: 'craft_7', path: 'assets/Craft 1.png' },
            { key: 'craft_8', path: 'assets/Craft 2.png' },
            { key: 'craft_9', path: 'assets/Craft 3.png' },
            { key: 'craft_10', path: 'assets/Craft 4.png' },
            { key: 'craft_11', path: 'assets/Craft 5.png' },
            { key: 'craft_12', path: 'assets/Craft 6.png' },
            { key: 'craft_13', path: 'assets/Craft 1.png' },
            { key: 'craft_14', path: 'assets/Craft 2.png' },
            { key: 'craft_15', path: 'assets/Craft 3.png' },
            { key: 'craft_16', path: 'assets/Craft 4.png' },
            { key: 'craft_17', path: 'assets/Craft 5.png' },
            { key: 'craft_18', path: 'assets/Craft 6.png' },
            { key: 'download_button', path: 'assets/Download Button.png' },
            { key: 'fall', path: 'assets/Fall.png' },
            { key: 'fighter_1', path: 'assets/Fighter 1.png' },
            { key: 'fighter_2', path: 'assets/Fighter 2.png' },
            { key: 'fighter_3', path: 'assets/Fighter 3.png' },
            { key: 'fighter_4', path: 'assets/Fighter 4.png' },
            { key: 'fighter_5', path: 'assets/Fighter 5.png' },
            { key: 'fighter_6', path: 'assets/Fighter 6.png' },
            { key: 'fighter_7', path: 'assets/Fighter 1.png' },
            { key: 'fighter_8', path: 'assets/Fighter 2.png' },
            { key: 'fighter_9', path: 'assets/Fighter 3.png' },
            { key: 'fighter_10', path: 'assets/Fighter 4.png' },
            { key: 'fighter_11', path: 'assets/Fighter 5.png' },
            { key: 'fighter_12', path: 'assets/Fighter 6.png' },
            { key: 'fighter_13', path: 'assets/Fighter 1.png' },
            { key: 'fighter_14', path: 'assets/Fighter 2.png' },
            { key: 'fighter_15', path: 'assets/Fighter 3.png' },
            { key: 'fighter_16', path: 'assets/Fighter 4.png' },
            { key: 'fighter_17', path: 'assets/Fighter 5.png' },
            { key: 'fighter_18', path: 'assets/Fighter 6.png' },
            { key: 'fighter_19', path: 'assets/Fighter 6.png' },
            { key: 'fighter_20', path: 'assets/Fighter 5.png' },
            { key: 'hand_pointer', path: 'assets/Hand Pointer.png' },
            { key: 'iq_counter', path: 'assets/IQ counter.png' },
            { key: 'parking_points_1', path: 'assets/Parking points.png' },
            { key: 'parking_points_2', path: 'assets/Parking points.png' },
            { key: 'parking_points_3', path: 'assets/Parking points.png' },
            { key: 'parking_1', path: 'assets/Parking.png' },
            { key: 'parking_2', path: 'assets/Parking.png' },
            { key: 'parking_3', path: 'assets/Parking.png' },
            { key: 'parking_4', path: 'assets/Parking.png' },
            { key: 'people_1_side_1', path: 'assets/People 1 Side.png' },
            { key: 'people_1_side_2', path: 'assets/People 1 Side.png' },
            { key: 'people_1_side_3', path: 'assets/People 1 Side.png' },
            { key: 'people_1_side_4', path: 'assets/People 1 Side.png' },
            { key: 'people_1_side_5', path: 'assets/People 1 Side.png' },
            { key: 'people_1_side_6', path: 'assets/People 1 Side.png' },
            { key: 'people_1_side_7', path: 'assets/People 1 Side.png' },
            { key: 'people_1_side_8', path: 'assets/People 1 Side.png' },
            { key: 'people_1', path: 'assets/People 1.png' },
            { key: 'people_2_side_1', path: 'assets/People 2 Side.png' },
            { key: 'people_2_side_2', path: 'assets/People 2 Side.png' },
            { key: 'people_2_side_3', path: 'assets/People 2 Side.png' },
            { key: 'people_2_side_4', path: 'assets/People 2 Side.png' },
            { key: 'people_2_side_5', path: 'assets/People 2 Side.png' },
            { key: 'people_2_side_6', path: 'assets/People 2 Side.png' },
            { key: 'people_2_side_7', path: 'assets/People 2 Side.png' },
            { key: 'people_2_side_8', path: 'assets/People 2 Side.png' },
            { key: 'people_2', path: 'assets/People 2.png' },
            { key: 'people_3_side_1', path: 'assets/People 3 side.png' },
            { key: 'people_3_side_2', path: 'assets/People 3 side.png' },
            { key: 'people_3_side_3', path: 'assets/People 3 side.png' },
            { key: 'people_3_side_4', path: 'assets/People 3 side.png' },
            { key: 'people_3_side_5', path: 'assets/People 3 side.png' },
            { key: 'people_3_side_6', path: 'assets/People 3 side.png' },
            { key: 'people_3_side_7', path: 'assets/People 3 side.png' },
            { key: 'people_3_side_8', path: 'assets/People 3 side.png' },
            { key: 'people_3', path: 'assets/People 3.png' },
            { key: 'people_4_side_1', path: 'assets/People 4 side.png' },
            { key: 'people_4_side_2', path: 'assets/People 4 side.png' },
            { key: 'people_4_side_3', path: 'assets/People 4 side.png' },
            { key: 'people_4_side_4', path: 'assets/People 4 side.png' },
            { key: 'people_4_side_5', path: 'assets/People 4 side.png' },
            { key: 'people_4_side_6', path: 'assets/People 4 side.png' },
            { key: 'people_4_side_7', path: 'assets/People 4 side.png' },
            { key: 'people_4_side_8', path: 'assets/People 4 side.png' },
            { key: 'people_4', path: 'assets/People 4.png' },
            { key: 'people_5_side_1', path: 'assets/People 5 Side.png' },
            { key: 'people_5_side_2', path: 'assets/People 5 Side.png' },
            { key: 'people_5_side_3', path: 'assets/People 5 Side.png' },
            { key: 'people_5_side_4', path: 'assets/People 5 Side.png' },
            { key: 'people_5_side_5', path: 'assets/People 5 Side.png' },
            { key: 'people_5_side_6', path: 'assets/People 5 Side.png' },
            { key: 'people_5_side_7', path: 'assets/People 5 Side.png' },
            { key: 'people_5_side_8', path: 'assets/People 5 Side.png' },
            { key: 'people_5', path: 'assets/People 5.png' },
            { key: 'people_6_side_1', path: 'assets/People 6 Side.png' },
            { key: 'people_6_side_2', path: 'assets/People 6 Side.png' },
            { key: 'people_6_side_3', path: 'assets/People 6 Side.png' },
            { key: 'people_6_side_4', path: 'assets/People 6 Side.png' },
            { key: 'people_6_side_5', path: 'assets/People 6 Side.png' },
            { key: 'people_6_side_6', path: 'assets/People 6 Side.png' },
            { key: 'people_6_side_7', path: 'assets/People 6 Side.png' },
            { key: 'people_6_side_8', path: 'assets/People 6 Side.png' },
            { key: 'people_6', path: 'assets/People 6.png' },
            { key: 'rettry', path: 'assets/Rettry.png' },
            { key: 'welcome_text', path: 'assets/Welcome text.png' },
        ];

        for (const asset of assets) {
            if (!this.textures.exists(asset.key)) {
                this.load.image(asset.key, asset.path);
            }
        }
    }
}
