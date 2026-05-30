class Game extends Phaser.Scene {
    constructor() {
        super('Game');

        this.LAYOUT_PORTRAIT = {
            all_peoples: { x: 0, y: 0, scale: 1, depth: 1 },
            blank_bg_for_use: { x: 510, y: 705, scale: 0.208, depth: 1 },
            new_bg: { x: 486, y: 962, scale: 2.323, depth: 1 },
            counting_machine: { x: 209, y: 1700, scale: 0.2, depth: 100 },
            craft_1: { x: 564, y: 821, scale: 0.025, angle: -3.828, depth: 5 },
            craft_2: { x: 450, y: 1051, scale: 0.025, angle: -171.887, depth: 5 },
            craft_3: { x: 818, y: 1069, scale: 0.025, angle: 83.079, depth: 5 },
            craft_4: { x: 245, y: 1058, scale: 0.025, angle: -85.944, depth: 5 },
            craft_5: { x: 682, y: 834, scale: 0.025, angle: -74.485, depth: 5 },
            craft_6: { x: 258, y: 774, scale: 0.025, angle: -78.313, depth: 5 },
            craft_7: { x: 264, y: 617, scale: 0.025, angle: -10, depth: 5 },
            craft_8: { x: 511, y: 616, scale: 0.025, depth: 5 },
            craft_9: { x: 249, y: 694, scale: 0.025, angle: -80.214, depth: 5 },
            craft_10: { x: 726, y: 1058, scale: 0.025, angle: 166.158, depth: 5 },
            craft_11: { x: 426, y: 619, scale: 0.025, depth: 5 },
            craft_12: { x: 446, y: 846, scale: 0.025, angle: 179.518, depth: 5 },
            craft_13: { x: 805, y: 995, scale: 0.025, angle: 80.214, depth: 5 },
            craft_14: { x: 545, y: 1052, scale: 0.025, angle: -177.617, depth: 5 },
            craft_15: { x: 255, y: 966, scale: 0.025, angle: -83.079, depth: 5 },
            craft_16: { x: 358, y: 1051, scale: 0.025, angle: -171.887, depth: 5 },
            craft_17: { x: 522, y: 926, scale: 0.025, depth: 5 },
            craft_18: { x: 791, y: 813, scale: 0.025, angle: 74.485, depth: 5 },
            download_button: { x: 541, y: 1775, scale: 0.072, depth: 100 },
            fall: { x: 0, y: 0, scale: 1, depth: 1 },
            fighter_1: { x: 46, y: 740, scale: 0.071, angle: 5.73, depth: 5 },
            fighter_2: { x: 589, y: 614, scale: 0.03, depth: 5 },
            fighter_3: { x: 1021, y: 740, scale: 0.071, angle: -5.73, depth: 5 },
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
            fighter_15: { x: 797, y: 908, scale: 0.03, angle: 77.349, depth: 5 },
            fighter_16: { x: 690, y: 618, scale: 0.03, angle: -2.865, depth: 5 },
            fighter_17: { x: 367, y: 797, scale: 0.03, angle: -80.214, depth: 5 },
            fighter_18: { x: -481, y: 740, scale: 0.03, angle: 5.73, depth: 5 },
            fighter_19: { x: 1278, y: 740, scale: 0.071, angle: -5.729, depth: 5 },
            fighter_20: { x: -210, y: 740, scale: 0.071, angle: 5.73, depth: 5 },
            hand_pointer: { x: 0, y: 0, scale: 1, depth: 200 },
            iq_counter: { x: 867, y: 1720, scale: 0.6, depth: 100 },
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
            counting_machine: { x: 278, y: 938, scale: 0.2, depth: 100 },
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
            download_button: { x: 1000, y: 1020, scale: 0.07, depth: 100 },
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
            iq_counter: { x: 1700, y: 960, scale: 0.6, depth: 100 },
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

        this.iqScore = 20;
        this.planesParked = 0;
        this.isMoving = false;
        this.isGameFailed = false;
        this.isGameEnding = false;

        this.STATIC_FIGHTERS = ['fighter_1', 'fighter_3', 'fighter_5', 'fighter_6', 'fighter_19', 'fighter_20'];
        this.PLAYABLE_FIGHTERS = ['fighter_2', 'fighter_4', 'fighter_7', 'fighter_8', 'fighter_9',
                                   'fighter_10', 'fighter_11', 'fighter_12', 'fighter_13', 'fighter_14',
                                   'fighter_15', 'fighter_16', 'fighter_17', 'fighter_18'];
        this.PLAYABLE_CRAFTS = ['craft_1', 'craft_2', 'craft_3', 'craft_4', 'craft_5',
                                 'craft_6', 'craft_7', 'craft_8', 'craft_9', 'craft_10',
                                 'craft_11', 'craft_12', 'craft_13', 'craft_14', 'craft_15',
                                 'craft_16', 'craft_17', 'craft_18'];
        this.PLAYABLE_ITEMS = [...this.PLAYABLE_FIGHTERS, ...this.PLAYABLE_CRAFTS];
        this.PARKING_KEYS = ['parking_1', 'parking_2', 'parking_3', 'parking_4'];
        this.parkingIndex = 0;

        this.PLAY_AREA_PORTRAIT = { minX: 220, maxX: 840, minY: 590, maxY: 1090 };
        this.PLAY_AREA_LANDSCAPE = { minX: 720, maxX: 1280, minY: 460, maxY: 910 };

        this.PLANE_COLORS = {
            'fighter_2':  0xFF8800,
            'fighter_4':  0xFFFF00,
            'fighter_7':  0x0000FF,
            'fighter_8':  0xFF8800,
            'fighter_9':  0xFFFFFF,
            'fighter_10': 0xFFFF00,
            'fighter_11': 0xFF0000,
            'fighter_12': 0x8800FF,
            'fighter_13': 0x0000FF,
            'fighter_14': 0xFF8800,
            'fighter_15': 0xFFFFFF,
            'fighter_16': 0xFFFF00,
            'fighter_17': 0xFF0000,
            'fighter_18': 0x8800FF,
            'craft_1':  0x0000FF,
            'craft_2':  0xFFFFFF,
            'craft_3':  0xFF0000,
            'craft_4':  0xFF8800,
            'craft_5':  0xFFFF00,
            'craft_6':  0x8800FF,
            'craft_7':  0x0000FF,
            'craft_8':  0xFFFFFF,
            'craft_9':  0xFF0000,
            'craft_10': 0xFF8800,
            'craft_11': 0xFFFF00,
            'craft_12': 0x8800FF,
            'craft_13': 0x0000FF,
            'craft_14': 0xFFFFFF,
            'craft_15': 0xFF0000,
            'craft_16': 0xFF8800,
            'craft_17': 0xFFFF00,
            'craft_18': 0x8800FF,
        };

        this.PEOPLE_COLORS = [
            0x0000FF,
            0xFF0000,
            0xFF8800,
            0xFFFF00,
            0x8800FF,
            0xFFFFFF
        ];

        this.peopleQueue = [];
        this.pendingPool = [];
        this.TOTAL_PEOPLE = 150;
        this.totalPeopleLeft = this.TOTAL_PEOPLE;
        this.MAX_PASSENGERS_PER_PLANE = 5;
        this.isBoarding = false;
        this.QUEUE_SIZE = 22;
        this.MAIN_QUEUE_SIZE = 16;
        this.GATE_QUEUE_SIZE = 6;
        this.queueSprites = [];
        this.parkedPlanes = {};
        this.planeRestPoses = {};
        this.parking4WarningOverlay = null;
        this.parking4WarningTween = null;

        this.PARKING_ANGLES = {
            'parking_1': -40,
            'parking_2': -40,
            'parking_3': -40,
            'parking_4': -40
        };
    }

    create() {
        this.createGameUI();
        this.setupPlaneData();
        this.initPeopleQueue();
        this.onOrientationChange();
        this.uiEditor = new UIEditor(this, {
            enabled: false,
            keys: this.getEditorKeys(),
            gridSize: 10,
            fileName: 'game.js'
        });

        this.time.addEvent({ delay: 500, callback: this.checkParkedPlanes, callbackScope: this, loop: true });
        this.time.addEvent({ delay: 200, callback: this.updateParking4Warning, callbackScope: this, loop: true });
    }

    getEditorKeys() {
        const keys = [
            'counting_machine',
            'craft_1', 'craft_2', 'craft_3', 'craft_4', 'craft_5',
            'craft_6', 'craft_7', 'craft_8', 'craft_9', 'craft_10',
            'craft_11', 'craft_12', 'craft_13', 'craft_14', 'craft_15',
            'craft_16', 'craft_17', 'craft_18',
            'download_button',
            'fighter_1', 'fighter_2', 'fighter_3', 'fighter_4', 'fighter_5',
            'fighter_6', 'fighter_7', 'fighter_8', 'fighter_9', 'fighter_10',
            'fighter_11', 'fighter_12', 'fighter_13', 'fighter_14', 'fighter_15',
            'fighter_16', 'fighter_17', 'fighter_18', 'fighter_19', 'fighter_20',
            'iq_counter',
        ];
        return keys;
    }

    createGameUI() {
        this.gameUIContainer = this.add.container(0, 0).setDepth(1);

        const addWorld = (key, alpha = 1) => {
            this[key] = this.add.image(0, 0, key).setOrigin(0.5).setAlpha(alpha);
            this.gameUIContainer.add(this[key]);
            return this[key];
        };

        addWorld('new_bg');

        for (let i = 1; i <= 4; i++) addWorld(`parking_${i}`);
        addWorld('parking_points_1');
        addWorld('parking_points_2');
        addWorld('parking_points_3');

        this.parking4WarningOverlay = this.add.image(0, 0, 'parking_4')
            .setOrigin(0.5)
            .setTintFill(0xff0000)
            .setAlpha(0)
            .setVisible(false);
        this.parking4WarningOverlay.setBlendMode(Phaser.BlendModes.ADD);
        this.gameUIContainer.add(this.parking4WarningOverlay);

        for (let i = 1; i <= 18; i++) {
            const key = `craft_${i}`;
            const sprite = addWorld(key);
            sprite.setInteractive({ useHandCursor: true });
            sprite.on('pointerdown', () => this.onItemClicked(key));
        }

        for (let i = 1; i <= 20; i++) {
            const key = `fighter_${i}`;
            const sprite = this.add.image(0, 0, key).setOrigin(0.5).setAlpha(1);
            this.gameUIContainer.add(sprite);
            this[key] = sprite;
            if (this.PLAYABLE_FIGHTERS.includes(key)) {
                sprite.setInteractive({ useHandCursor: true });
                sprite.on('pointerdown', () => this.onItemClicked(key));
            }
        }

        this.queueSprites = [];
        for (let i = 0; i < 40; i++) {
            const sprite = this.add.image(-1000, -1000, 'people_1_side_1')
                .setOrigin(0.5)
                .setAlpha(0)
                .setDepth(50);
            this.gameUIContainer.add(sprite);
            this.queueSprites.push({
                sprite,
                assignedQueueIndex: -1,
                personId: null,
                active: false
            });
        }

        this.iq_counter = this.add.image(0, 0, 'iq_counter').setOrigin(0.5).setAlpha(1).setDepth(100);
        this.counting_machine = this.add.image(0, 0, 'counting_machine').setOrigin(0.5).setAlpha(1).setDepth(100);
        this.download_button = this.add.image(0, 0, 'download_button').setOrigin(0.5).setAlpha(1).setDepth(100);

        this.iqText = this.add.text(0, 0, '20', {
            fontFamily: 'Arial', fontSize: '25px', fontStyle: 'bold', color: '#000000'
        }).setOrigin(0.5).setDepth(101);

        this.peopleLeftText = this.add.text(0, 0, `${this.totalPeopleLeft}`, {
            fontFamily: 'Arial', fontSize: '20px', fontStyle: 'bold', color: '#FFFFFF', align: 'center'
        }).setOrigin(0.5).setDepth(101);

        this.failOverlay = this.add.rectangle(0, 0, 1, 1, 0x000000, 1)
            .setOrigin(0)
            .setAlpha(0)
            .setVisible(false)
            .setDepth(1000);
        this.failImage = this.add.image(0, 0, 'fall')
            .setOrigin(0.5)
            .setAlpha(0)
            .setVisible(false)
            .setDepth(1001);
        this.updateFailOverlayLayout();
    }

    setupPlaneData() {
        this.itemData = {};
        for (const key of this.PLAYABLE_ITEMS) {
            this.itemData[key] = { 
                key, isParked: false, isMoving: false, isStatic: false, isPlayable: true,
                departed: false,
                color: this.PLANE_COLORS[key] || 0xFFFFFF
            };
        }
        for (const key of this.STATIC_FIGHTERS) {
            this.itemData[key] = { key, isParked: false, isMoving: false, isStatic: true, isPlayable: false, departed: false };
        }
        this.parkingData = {};
        for (const key of this.PARKING_KEYS) {
            this.parkingData[key] = { key, occupied: false, planeKey: null };
        }
        this.updateParking4Warning();
    }

    /* ============================================================
       PEOPLE QUEUE SYSTEM
       ============================================================ */

    initPeopleQueue() {
        this.peopleQueue = [];
        this.pendingPool = [];
        this.totalPeopleLeft = this.TOTAL_PEOPLE;
        this.updatePeopleLeftCounter();

        let remainingToGenerate = this.totalPeopleLeft;

        while (remainingToGenerate > 0) {
            const groupSize = Math.min(Phaser.Math.Between(4, 6), remainingToGenerate);
            const colorIdx = Phaser.Math.Between(0, this.PEOPLE_COLORS.length - 1);
            const color = this.PEOPLE_COLORS[colorIdx];

            for (let i = 0; i < groupSize; i++) {
                const person = { 
                    color, 
                    colorIdx, 
                    id: Math.random().toString(36).substr(2, 9) 
                };
                if (this.peopleQueue.length < this.QUEUE_SIZE) {
                    this.peopleQueue.push(person);
                } else {
                    this.pendingPool.push(person);
                }
                remainingToGenerate--;
            }
        }

        this.renderQueues();
        this.time.addEvent({ delay: 50, callback: this.updateQueuePositions, callbackScope: this, loop: true });
    }

    getQueueSlotPosition(slotIndex) {
        const isLandscape = this.scale.width > this.scale.height;

        if (isLandscape) {
            if (slotIndex < this.MAIN_QUEUE_SIZE) {
                // Horizontal main queue: left to right
                const startX = 870;
                const startY = 165;
                const spacing = 17;
                return { x: startX + (slotIndex * spacing), y: startY };
            } else {
                // Vertical gate queue: INVERTED so slot 18 = bottom, slot 23 = top
                // New arrivals join at the back (bottom, index 18), front of queue is top (index 23)
                const gateIndex = slotIndex - this.MAIN_QUEUE_SIZE; // 0..5
                const maxGateIndex = this.GATE_QUEUE_SIZE - 1;      // 5
                const startX = 1140;
                const bottomY = 70 + (maxGateIndex * 17); // bottom of column
                const spacing = 17;
                return { x: startX, y: bottomY - (gateIndex * spacing) };
            }
        } else {
            if (slotIndex < this.MAIN_QUEUE_SIZE) {
                // Horizontal main queue: unchanged
                const startX = 390;
                const startY = 230;
                const spacing = 19;
                return { x: startX + (slotIndex * spacing), y: startY };
            } else {
                // Vertical gate queue: INVERTED so slot 18 = bottom, slot 23 = top
                const gateIndex = slotIndex - this.MAIN_QUEUE_SIZE; // 0..5
                const maxGateIndex = this.GATE_QUEUE_SIZE - 1;      // 5
                const startX = 697;
                const bottomY = 135 + (maxGateIndex * 18); // bottom of column
                const spacing = 18;
                return { x: startX, y: bottomY - (gateIndex * spacing) };
            }
        }
    }

    getQueueScale() {
        return this.scale.width > this.scale.height ? 0.022 : 0.032;
    }

    getQueueTextureKey(colorNumber, queueIndex) {
        if (queueIndex >= this.MAIN_QUEUE_SIZE) {
            return `people_${colorNumber}`;
        } else {
            const variant = (queueIndex % 8) + 1;
            return `people_${colorNumber}_side_${variant}`;
        }
    }

    getQueueDepth() {
        return 50;
    }

    applyQueueRenderOrder() {
        if (!this.gameUIContainer || !this.queueSprites) return;

        const verticalSlots = this.queueSprites
            .filter(slot =>
                slot.active &&
                slot.assignedQueueIndex >= this.MAIN_QUEUE_SIZE &&
                slot.assignedQueueIndex < this.QUEUE_SIZE
            )
            .sort((a, b) => b.assignedQueueIndex - a.assignedQueueIndex);

        for (const slot of verticalSlots) {
            this.gameUIContainer.bringToTop(slot.sprite);
        }
    }

    renderQueues() {
        for (const slot of this.queueSprites) { 
            slot.active = false;
            slot.assignedQueueIndex = -1;
            slot.personId = null;
            slot.sprite.setAlpha(0);
            slot.sprite.setPosition(-1000, -1000);
            slot.sprite.setDepth(50);
        }

        for (let i = 0; i < this.peopleQueue.length && i < this.QUEUE_SIZE; i++) {
            const person = this.peopleQueue[i];
            const colorNumber = person.colorIdx + 1;
            const pos = this.getQueueSlotPosition(i);

            const slot = this.queueSprites.find(s => !s.active);
            if (!slot) continue;

            slot.active = true;
            slot.assignedQueueIndex = i;
            slot.personId = person.id;

            const textureKey = this.getQueueTextureKey(colorNumber, i);
            slot.sprite.setTexture(textureKey);

            slot.sprite.setAlpha(1);
            slot.sprite.setPosition(pos.x, pos.y);
            slot.sprite.setScale(this.getQueueScale());
            slot.sprite.setTint(person.color);
            slot.sprite.setDepth(50);
        }

        this.applyQueueRenderOrder();
    }

    updateQueuePositions() {
        if (this.isBoarding) return;
        if (!this.queueSprites) return;

        for (const slot of this.queueSprites) {
            if (!slot.active || slot.assignedQueueIndex < 0) continue;
            if (slot.assignedQueueIndex >= this.QUEUE_SIZE) continue;

            const pos = this.getQueueSlotPosition(slot.assignedQueueIndex);
            slot.sprite.x += (pos.x - slot.sprite.x) * 0.15;
            slot.sprite.y += (pos.y - slot.sprite.y) * 0.15;
        }
    }

    updatePeopleLeftCounter() {
        if (this.peopleLeftText) {
            this.peopleLeftText.setText(`${this.totalPeopleLeft}`);
        }
    }

    /* ============================================================
       BOARDING SYSTEM
       ============================================================ */

    boardPassengers(planeKey, parkingKey) {
        if (this.isGameFailed) return;
        if (this.isGameEnding) return;

        const planeColor = this.itemData[planeKey].color;
        const parkingLayout = this.getCurrentLayout()[parkingKey];

        if (this.peopleQueue.length > 0) {
            // queue check
        }

        const toBoard = [];
        for (let i = 0; i < this.peopleQueue.length && toBoard.length < this.MAX_PASSENGERS_PER_PLANE; i++) {
            const personColor = this.peopleQueue[i].color;
            if (personColor === planeColor) {
                toBoard.push(i);
            } else {
                break;
            }
        }

        if (toBoard.length === 0) {
            this.parkedPlanes[parkingKey] = {
                planeKey: planeKey,
                boardedCount: 0,
                maxCapacity: this.MAX_PASSENGERS_PER_PLANE,
                isWaiting: true
            };
            this.updateParking4Warning();
            this.checkFailCondition();
            return;
        }

        this.isBoarding = true;

        this.animateSequentialBoarding(toBoard, parkingLayout, (boardedCount) => {
            const existing = this.parkedPlanes[parkingKey];
            const totalBoarded = (existing ? existing.boardedCount : 0) + boardedCount;

            this.parkedPlanes[parkingKey] = {
                planeKey: planeKey,
                boardedCount: totalBoarded,
                maxCapacity: this.MAX_PASSENGERS_PER_PLANE,
                isWaiting: totalBoarded < this.MAX_PASSENGERS_PER_PLANE
            };
            this.updateParking4Warning();

            this.removeBoardedPeople(toBoard);
            this.totalPeopleLeft -= boardedCount;
            this.updatePeopleLeftCounter();
            this.refillQueueFromPool();

            this.animateQueueShift(() => {
                this.isBoarding = false;

                if (totalBoarded >= this.MAX_PASSENGERS_PER_PLANE) {
                    this.planeDepartAndDisappear(planeKey, parkingKey);
                    delete this.parkedPlanes[parkingKey];
                    this.updateParking4Warning();
                } else if (!this.checkWinCondition()) {
                    this.checkFailCondition();
                }
            });
        });
    }

    checkParkedPlanes() {
        if (this.isGameFailed) return;
        if (this.isGameEnding) return;
        if (this.isBoarding) return;

        for (const parkingKey of this.PARKING_KEYS) {
            const parked = this.parkedPlanes[parkingKey];
            if (!parked || !parked.isWaiting) continue;

            const planeKey = parked.planeKey;
            const planeColor = this.itemData[planeKey].color;
            const parkingLayout = this.getCurrentLayout()[parkingKey];

            if (this.peopleQueue.length === 0) continue;

            const toBoard = [];
            const needed = parked.maxCapacity - parked.boardedCount;

            for (let i = 0; i < this.peopleQueue.length && toBoard.length < needed; i++) {
                const personColor = this.peopleQueue[i].color;
                if (personColor === planeColor) {
                    toBoard.push(i);
                } else {
                    break;
                }
            }

            if (toBoard.length === 0) continue;

            this.isBoarding = true;

            this.animateSequentialBoarding(toBoard, parkingLayout, (boardedCount) => {
                const totalBoarded = parked.boardedCount + boardedCount;
                this.parkedPlanes[parkingKey].boardedCount = totalBoarded;
                this.updateParking4Warning();

                this.removeBoardedPeople(toBoard);
                this.totalPeopleLeft -= boardedCount;
                this.updatePeopleLeftCounter();
                this.refillQueueFromPool();

                this.animateQueueShift(() => {
                    this.isBoarding = false;

                    if (totalBoarded >= this.MAX_PASSENGERS_PER_PLANE) {
                        this.planeDepartAndDisappear(planeKey, parkingKey);
                        delete this.parkedPlanes[parkingKey];
                        this.updateParking4Warning();
                    } else if (!this.checkWinCondition()) {
                        this.checkFailCondition();
                    }
                });
            });

            break;
        }
    }

    animateSequentialBoarding(indices, parkingLayout, onComplete) {
        if (!parkingLayout) {
            if (onComplete) onComplete(0);
            return;
        }

        let completed = 0;
        const total = indices.length;

        for (let i = 0; i < indices.length; i++) {
            const queueIndex = indices[i];
            const person = this.peopleQueue[queueIndex];

            const slot = this.queueSprites.find(s => s.active && s.personId === person.id);

            if (!slot) {
                completed++;
                if (completed >= total && onComplete) onComplete(total);
                continue;
            }

            const targetX = parkingLayout.x;
            const targetY = parkingLayout.y + 20;

            this.tweens.add({
                targets: slot.sprite,
                x: targetX,
                y: targetY,
                scale: 0.01,
                alpha: 0,
                duration: 600,
                delay: i * 150,
                ease: 'Power2',
                onComplete: () => {
                    slot.active = false;
                    slot.assignedQueueIndex = -1;
                    slot.personId = null;
                    slot.sprite.setPosition(-1000, -1000);
                    slot.sprite.setScale(this.getQueueScale());
                    slot.sprite.setAlpha(0);

                    completed++;
                    if (completed >= total && onComplete) onComplete(total);
                }
            });
        }

        if (total === 0 && onComplete) onComplete(0);
    }

    removeBoardedPeople(indices) {
        const sorted = [...indices].sort((a, b) => b - a);
        for (const idx of sorted) {
            if (idx >= 0 && idx < this.peopleQueue.length) {
                this.peopleQueue.splice(idx, 1);
            }
        }
    }

    refillQueueFromPool() {
        while (this.peopleQueue.length < this.QUEUE_SIZE && this.pendingPool.length > 0) {
            const nextPerson = this.pendingPool.shift();
            // New person always goes to the END of the queue (back of the line)
            this.peopleQueue.push(nextPerson);
        }
    }

    animateQueueShift(onComplete) {
        const moveDuration = 420;
        const cornerDuration = 180;
        const oldQueueIndices = new Map();
        let tweenCount = 0;
        let completed = 0;

        for (const slot of this.queueSprites) {
            if (slot.active && slot.personId) {
                oldQueueIndices.set(slot.personId, slot.assignedQueueIndex);
            }
        }

        const doneOne = () => {
            completed++;
            if (completed >= tweenCount) {
                if (onComplete) onComplete();
            }
        };

        const getSpawnPosition = () => {
            const backPos = this.getQueueSlotPosition(this.MAIN_QUEUE_SIZE);
            const nextPos = this.getQueueSlotPosition(this.MAIN_QUEUE_SIZE + 1);
            const offsetY = backPos.y - nextPos.y;
            return { x: backPos.x, y: backPos.y + offsetY };
        };

        for (const slot of this.queueSprites) {
            if (slot.active && !this.peopleQueue.some(p => p.id === slot.personId)) {
                this.tweens.killTweensOf(slot.sprite);
                slot.active = false;
                slot.assignedQueueIndex = -1;
                slot.personId = null;
                slot.sprite.setAlpha(0);
                slot.sprite.setPosition(-1000, -1000);
            }
        }

        for (let i = 0; i < this.peopleQueue.length && i < this.QUEUE_SIZE; i++) {
            const person = this.peopleQueue[i];
            const colorNumber = person.colorIdx + 1;
            const pos = this.getQueueSlotPosition(i);

            let slot = this.queueSprites.find(s => s.active && s.personId === person.id);

            if (!slot) {
                slot = this.queueSprites.find(s => !s.active);
                if (!slot) continue;

                const spawnPos = getSpawnPosition();
                slot.active = true;
                slot.personId = person.id;
                slot.sprite.setPosition(spawnPos.x, spawnPos.y);
                slot.sprite.setAlpha(0);
                slot.sprite.setTint(person.color);
            }

            const textureKey = this.getQueueTextureKey(colorNumber, i);
            const oldIndex = oldQueueIndices.has(person.id) ? oldQueueIndices.get(person.id) : null;
            const wasInGateQueue = oldIndex !== null && oldIndex >= this.MAIN_QUEUE_SIZE;
            const movesToMainQueue = i < this.MAIN_QUEUE_SIZE;
            const needsCornerTurn = wasInGateQueue && movesToMainQueue;
            if (!needsCornerTurn) {
                slot.sprite.setTexture(textureKey);
            }

            slot.assignedQueueIndex = i;
            slot.sprite.setScale(this.getQueueScale());
            slot.sprite.setDepth(50);
            this.tweens.killTweensOf(slot.sprite);

            tweenCount++;
            if (needsCornerTurn) {
                const corner = { x: slot.sprite.x, y: pos.y };
                this.tweens.add({
                    targets: slot.sprite,
                    x: corner.x,
                    y: corner.y,
                    alpha: 1,
                    scale: this.getQueueScale(),
                    duration: cornerDuration,
                    ease: 'Sine.inOut',
                    onComplete: () => {
                        slot.sprite.setTexture(textureKey);
                        this.tweens.add({
                            targets: slot.sprite,
                            x: pos.x,
                            y: pos.y,
                            alpha: 1,
                            scale: this.getQueueScale(),
                            duration: moveDuration,
                            ease: 'Power2',
                            onComplete: doneOne
                        });
                    }
                });
            } else {
                this.tweens.add({
                    targets: slot.sprite,
                    x: pos.x,
                    y: pos.y,
                    alpha: 1,
                    scale: this.getQueueScale(),
                    duration: moveDuration,
                    ease: 'Power2',
                    onComplete: doneOne
                });
            }
        }

        this.applyQueueRenderOrder();

        if (tweenCount === 0) {
            if (onComplete) onComplete();
        }
    }

    /* ============================================================
       PLANE DEPARTURE
       Real-life sequence:
         1. Reverse straight back at -40° (same angle as parked) until on taxiway
         2. Rotate to face runway (left, ~-90°)
         3. Taxi left along runway
         4. Take off (fly up-left, fade out)
       ============================================================ */

    planeDepartAndDisappear(planeKey, parkingKey) {
        if (this.parkingData[parkingKey]) {
            this.parkingData[parkingKey].occupied = false;
            this.parkingData[parkingKey].planeKey = null;
        }
        this.updateParking4Warning();
        if (this.itemData[planeKey]) {
            this.itemData[planeKey].departed = true;
            this.itemData[planeKey].isParked = false;
            this.itemData[planeKey].isMoving = false;
        }

        const sprite = this[planeKey];
        const layout = this.getCurrentLayout();
        if (!sprite) return;

        const parkingLayout = layout[parkingKey];
        const parkAngle = this.PARKING_ANGLES[parkingKey] || -40;
        const originalScale = sprite.scaleX;

        // The taxiway sits below the parking row.
        // At -40° the nose points upper-left, tail lower-right.
        // Reversing means moving in the tail direction: down and to the right.
        // We compute how far along that direction we need to go to clear the slot.
        const reverseDistPx = 90; // pixels to reverse until on taxiway
        const angleRad = (parkAngle - 90) * (Math.PI / 180); // convert sprite angle to world direction
        // Tail direction is opposite of nose
        const tailDirX = -Math.cos(angleRad);
        const tailDirY = -Math.sin(angleRad);

        const taxiX = sprite.x + tailDirX * reverseDistPx;
        const taxiY = sprite.y + tailDirY * reverseDistPx;
        const exitX = -300;

        // Step 1: Reverse straight back along parking angle (tail-first, angle stays the same)
        this.tweens.add({
            targets: sprite,
            x: taxiX,
            y: taxiY,
            duration: 600,
            ease: 'Power2.out',
            onComplete: () => {
                // Step 2: Rotate to face runway (left)
                this.tweens.add({
                    targets: sprite,
                    angle: -90,
                    duration: 400,
                    ease: 'Sine.inOut',
                    onComplete: () => {
                        // Step 3: Taxi left along taxiway
                        this.tweens.add({
                            targets: sprite,
                            x: parkingLayout.x - 250,
                            duration: 700,
                            ease: 'Power1.in',
                            onComplete: () => {
                                // Step 4: Take off - front/nose up illusion
                                this.tweens.add({
                                    targets: sprite,
                                    x: exitX,
                                    angle: -105,
                                    scaleX: 0.075,
                                    scaleY: 0.060,
                                    duration: 1000,
                                    ease: 'Power2.out',
                                    onComplete: () => {
                                        this.tweens.add({
                                            targets: sprite,
                                            alpha: 0,
                                            duration: 400,
                                            ease: 'Power2',
                                            onComplete: () => {
                                                sprite.setPosition(-1000, -1000);
                                                sprite.disableInteractive();
                                                this.updateParking4Warning();
                                                this.checkWinCondition();
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }

    /* ============================================================
       GAME LOGIC
       ============================================================ */

    onItemClicked(itemKey) {
        if (this.isGameFailed) return;
        if (this.isGameEnding) return;

        const item = this.itemData[itemKey];
        if (!item) return;
        if (item.departed) return;
        if (item.isParked) return;
        if (item.isMoving) return;
        if (item.isStatic) return;
        if (this.isMoving) return;
        if (this.isBoarding) return;

        const parkingKey = this.getNextParkingSpot();
        if (!parkingKey) {
            this.checkFailCondition();
            return;
        }

        const path = this.calculatePath(itemKey, parkingKey);
        if (!path || path.length === 0) {
            this.shakePlane(itemKey);
            return;
        }

        if (!this.isPathClear(itemKey, path)) {
            this.shakePlane(itemKey);
            return;
        }

        this.moveItem(itemKey, parkingKey, path);
    }

    shakePlane(itemKey) {
        const sprite = this[itemKey];
        if (!sprite) return;

        if (!this.planeRestPoses[itemKey]) {
            this.planeRestPoses[itemKey] = {
                x: sprite.x,
                y: sprite.y,
                angle: sprite.angle
            };
        }

        const restPose = this.planeRestPoses[itemKey];
        this.tweens.killTweensOf(sprite);
        sprite.setPosition(restPose.x, restPose.y);
        sprite.setAngle(restPose.angle);

        this.tweens.add({
            targets: sprite,
            x: restPose.x + 8,
            duration: 60,
            yoyo: true,
            repeat: 5,
            ease: 'Sine.easeInOut',
            onComplete: () => {
                sprite.setPosition(restPose.x, restPose.y);
            }
        });

        this.tweens.add({
            targets: sprite,
            angle: restPose.angle + 5,
            duration: 60,
            yoyo: true,
            repeat: 3,
            ease: 'Sine.easeInOut',
            onComplete: () => {
                sprite.setAngle(restPose.angle);
            }
        });

    }

    isPathClear(itemKey, path) {
        const sprite = this[itemKey];
        if (!sprite || !path || path.length === 0) return false;

        const route = [{ x: sprite.x, y: sprite.y }, ...path];
        const clearance = this.scale.width > this.scale.height ? 48 : 56;

        for (const otherKey of this.PLAYABLE_ITEMS) {
            if (otherKey === itemKey) continue;

            const otherItem = this.itemData[otherKey];
            if (!otherItem || otherItem.isParked || otherItem.isMoving || otherItem.departed) continue;

            const otherSprite = this[otherKey];
            if (!otherSprite || otherSprite.alpha <= 0) continue;

            for (let i = 0; i < route.length - 1; i++) {
                const start = route[i];
                const end = route[i + 1];
                const segmentLength = Phaser.Math.Distance.Between(start.x, start.y, end.x, end.y);
                if (segmentLength < 1) continue;

                const distance = this.getDistanceToSegment(
                    otherSprite.x,
                    otherSprite.y,
                    start.x,
                    start.y,
                    end.x,
                    end.y
                );

                if (distance < clearance) {
                    return false;
                }
            }
        }

        return true;
    }

    getDistanceToSegment(px, py, x1, y1, x2, y2) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const lengthSq = dx * dx + dy * dy;

        if (lengthSq === 0) {
            return Phaser.Math.Distance.Between(px, py, x1, y1);
        }

        const t = Math.max(0, Math.min(1, ((px - x1) * dx + (py - y1) * dy) / lengthSq));
        const closestX = x1 + t * dx;
        const closestY = y1 + t * dy;
        return Phaser.Math.Distance.Between(px, py, closestX, closestY);
    }

    getPlayAreaBounds() {
        return this.scale.width > this.scale.height ? this.PLAY_AREA_LANDSCAPE : this.PLAY_AREA_PORTRAIT;
    }

    getCurrentLayout() {
        return this.scale.width > this.scale.height ? this.LAYOUT_LANDSCAPE : this.LAYOUT_PORTRAIT;
    }

    getNextParkingSpot() {
        for (const key of this.PARKING_KEYS) {
            if (this.parkingData[key] && !this.parkingData[key].occupied) return key;
        }
        return null;
    }

    getParkingKeyForPlane(planeKey) {
        for (const key of this.PARKING_KEYS) {
            if (this.parkingData[key] && this.parkingData[key].planeKey === planeKey) {
                return key;
            }
        }
        return null;
    }

    isParkingSlotFullForWarning(parkingKey) {
        if (this.parkingData && this.parkingData[parkingKey] && this.parkingData[parkingKey].occupied) {
            return true;
        }

        if (this.parkedPlanes && this.parkedPlanes[parkingKey]) {
            return true;
        }

        const layout = this.getCurrentLayout();
        const parkingLayout = layout[parkingKey];
        if (!parkingLayout || !this.itemData) return false;

        const radius = this.scale.width > this.scale.height ? 52 : 64;
        for (const itemKey of this.PLAYABLE_ITEMS) {
            const item = this.itemData[itemKey];
            const sprite = this[itemKey];
            if (!item || !sprite || !item.isParked || sprite.alpha <= 0) continue;

            const distance = Phaser.Math.Distance.Between(
                sprite.x,
                sprite.y,
                parkingLayout.x,
                parkingLayout.y
            );
            if (distance <= radius) return true;
        }

        return false;
    }

    shouldShowParking4Warning() {
        if (this.isGameFailed || this.isGameEnding) return false;
        if (!this.parkingData || !this.parking4WarningOverlay) return false;

        const firstThreeFull = ['parking_1', 'parking_2', 'parking_3'].every((key) => {
            return Boolean(
                (this.parkingData[key] && this.parkingData[key].occupied) ||
                (this.parkedPlanes && this.parkedPlanes[key]) ||
                this.isParkingSlotFullForWarning(key)
            );
        });
        const fourthOpen = !(
            (this.parkingData.parking_4 && this.parkingData.parking_4.occupied) ||
            (this.parkedPlanes && this.parkedPlanes.parking_4)
        );

        return firstThreeFull && fourthOpen;
    }

    updateParking4WarningLayout() {
        if (!this.parking4WarningOverlay) return;

        const layout = this.getCurrentLayout().parking_4;
        if (!layout) return;

        this.parking4WarningOverlay.setPosition(layout.x, layout.y);
        if (layout.scale !== undefined) this.parking4WarningOverlay.setScale(layout.scale);
        if (layout.angle !== undefined) this.parking4WarningOverlay.setAngle(layout.angle);
        else if (layout.r !== undefined) this.parking4WarningOverlay.setRotation(layout.r);
    }

    hideParking4Warning() {
        if (this.parking4WarningTween) {
            this.parking4WarningTween.stop();
            this.parking4WarningTween = null;
        }

        if (this.parking4WarningOverlay) {
            this.parking4WarningOverlay.setVisible(false).setAlpha(0);
        }
    }

    updateParking4Warning() {
        if (!this.parking4WarningOverlay) return;

        this.updateParking4WarningLayout();

        if (!this.shouldShowParking4Warning()) {
            this.hideParking4Warning();
            return;
        }

        this.gameUIContainer.bringToTop(this.parking4WarningOverlay);

        if (this.parking4WarningTween) return;

        this.parking4WarningOverlay
            .setVisible(true)
            .setAlpha(0.4);

        this.parking4WarningTween = this.tweens.add({
            targets: this.parking4WarningOverlay,
            alpha: 0.9,
            duration: 260,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.inOut'
        });
    }

    /* ============================================================
       PATH CALCULATION
       Real-life taxi path into parking:
         All existing waypoints navigate the plane to the taxiway
         (the road running below/beside the parking row).
         The final two waypoints are the -40° approach:
           - taxiEntryPoint: a point offset from the parking slot
             in the REVERSE of the parking angle (i.e. where the
             nose would be if you backed out), placed on the taxiway
           - parkingSlot: the final resting position
         The movement from taxiEntry -> parkingSlot is exactly along
         the -40° axis, so the plane naturally drives in at that angle.
       ============================================================ */

    getFacingExitDirection(angle) {
        const angleRad = angle * (Math.PI / 180);
        const noseX = Math.sin(angleRad);
        const noseY = -Math.cos(angleRad);

        if (Math.abs(noseX) >= Math.abs(noseY)) {
            return noseX < 0 ? 'left' : 'right';
        }

        return noseY < 0 ? 'up' : 'down';
    }

    calculatePath(itemKey, parkingKey) {
        const layout = this.getCurrentLayout();
        const itemLayout = layout[itemKey];
        const parkingLayout = layout[parkingKey];
        if (!itemLayout || !parkingLayout) return null;

        const sprite = this[itemKey];
        const path = [];
        const startX = sprite ? sprite.x : itemLayout.x;
        const startY = sprite ? sprite.y : itemLayout.y;
        const startAngle = sprite ? sprite.angle : (itemLayout.angle || 0);
        const endX = parkingLayout.x, endY = parkingLayout.y;
        const playArea = this.getPlayAreaBounds();
        const parkAngle = this.PARKING_ANGLES[parkingKey] || -40;

        // --- Compute the taxi-entry point ---
        // The plane parks at (endX, endY) at angle parkAngle.
        // The nose direction (in world space) for a sprite that points "up" at angle 0:
        //   noseX = sin(parkAngle_rad), noseY = -cos(parkAngle_rad)
        // The tail direction is the opposite.
        // The taxi-entry point is behind the tail by approxEntryDist pixels,
        // sitting on the taxiway level below the parking slot.
        const parkAngleRad = parkAngle * (Math.PI / 180);
        const noseDirX = Math.sin(parkAngleRad);
        const noseDirY = -Math.cos(parkAngleRad);
        // tail direction
        const tailDirX = -noseDirX;
        const tailDirY = -noseDirY;

        const approxEntryDist = 90; // how far below the slot the taxi-entry point is
        const taxiEntryX = endX + tailDirX * approxEntryDist;
        const taxiEntryY = endY + tailDirY * approxEntryDist;

        // --- Build the path to taxiway, then final approach ---
        const isInsidePlayArea = (
            startX >= playArea.minX && startX <= playArea.maxX &&
            startY >= playArea.minY && startY <= playArea.maxY
        );

        if (isInsidePlayArea) {
            const exitDirection = this.getFacingExitDirection(startAngle);
            const exitMargin = 60;
            const aboveY = playArea.minY - exitMargin;

            if (exitDirection === 'up') {
                const exitY = aboveY;
                path.push({ x: startX, y: exitY });
                path.push({ x: taxiEntryX, y: taxiEntryY });
            } else if (exitDirection === 'down') {
                const exitY = playArea.maxY + exitMargin;
                path.push({ x: startX, y: exitY });
                const sideX = startX < (playArea.minX + playArea.maxX) / 2 ? playArea.minX - exitMargin : playArea.maxX + exitMargin;
                path.push({ x: sideX, y: exitY });
                path.push({ x: sideX, y: aboveY });
                path.push({ x: taxiEntryX, y: taxiEntryY });
            } else if (exitDirection === 'left') {
                const exitX_side = playArea.minX - exitMargin;
                path.push({ x: exitX_side, y: startY });
                path.push({ x: exitX_side, y: aboveY });
                path.push({ x: taxiEntryX, y: taxiEntryY });
            } else {
                const exitX_side = playArea.maxX + exitMargin;
                path.push({ x: exitX_side, y: startY });
                path.push({ x: exitX_side, y: aboveY });
                path.push({ x: taxiEntryX, y: taxiEntryY });
            }
        } else {
            const safeY = Math.min(startY - 100, playArea.minY - 60);
            if (Math.abs(startY - safeY) > 20) path.push({ x: startX, y: safeY });
            path.push({ x: taxiEntryX, y: taxiEntryY });
        }

        // Final approach: reach the angled taxi entry, then drive into the slot.
        path.push({ x: endX, y: endY });
        return path;
    }

    /* ============================================================
       SMOOTH PLANE MOVEMENT
       The moveItem function faces the plane toward each waypoint
       as it moves. Because the last segment goes from taxiEntryPoint
       to parkingSlot along the exact -40° axis, the plane will
       naturally be oriented at -40° as it pulls into the slot —
       no special-casing needed for the final waypoint.
       ============================================================ */

    moveItem(itemKey, parkingKey, path) {
        const item = this.itemData[itemKey];
        const sprite = this[itemKey];
        item.isMoving = true;
        this.isMoving = true;
        sprite.setDepth(10);

        let stepIndex = 0;
        const moveNext = () => {
            if (stepIndex >= path.length) {
                this.onItemParked(itemKey, parkingKey);
                return;
            }

            const target = path[stepIndex++];
            const dx = target.x - sprite.x;
            const dy = target.y - sprite.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Face the direction of movement
            let moveAngle = Math.atan2(dy, dx) * (180 / Math.PI);
            let targetAngle = moveAngle + 90;
            while (targetAngle > 180) targetAngle -= 360;
            while (targetAngle < -180) targetAngle += 360;

            const duration = Math.max(300, dist * 1.5);

            this.tweens.add({
                targets: sprite,
                angle: targetAngle,
                duration: Math.min(200, duration * 0.3),
                ease: 'Sine.inOut',
                onComplete: () => {
                    this.tweens.add({
                        targets: sprite, 
                        x: target.x, 
                        y: target.y,
                        duration: duration,
                        ease: 'Power2.out',
                        onComplete: moveNext
                    });
                }
            });
        };
        moveNext();
    }

    onItemParked(itemKey, parkingKey) {
        const item = this.itemData[itemKey];
        const sprite = this[itemKey];
        item.isParked = true;
        item.isMoving = false;
        this.isMoving = false;
        sprite.setDepth(5);
        this.parkingData[parkingKey].occupied = true;
        this.parkingData[parkingKey].planeKey = itemKey;
        this.updateParking4Warning();
        this.planesParked++;
        this.iqScore += 10;
        this.updateIQScore();

        // Snap to exact parking angle
        const parkAngle = this.PARKING_ANGLES[parkingKey] || -40;
        sprite.setAngle(parkAngle);

        this.time.delayedCall(300, () => {
            this.boardPassengers(itemKey, parkingKey);
        });
    }

    updateIQScore() {
        if (this.iqText) this.iqText.setText(`${this.iqScore}`);
    }

    checkWinCondition() {
        if (this.isGameFailed || this.isGameEnding) return false;
        if (this.totalPeopleLeft > 0) return false;
        if (this.peopleQueue.length > 0 || this.pendingPool.length > 0) return false;

        this.transitionToEndScene('win');
        return true;
    }

    checkFailCondition() {
        if (this.isGameFailed) return true;

        const allParkingFull = this.PARKING_KEYS.every((key) => {
            return this.parkingData[key] && this.parkingData[key].occupied;
        });

        if (allParkingFull) {
            this.showFailOverlay();
            return true;
        }

        return false;
    }

    showFailOverlay() {
        if (this.isGameFailed) return;

        this.isGameFailed = true;
        this.isMoving = false;
        this.isBoarding = false;
        this.hideParking4Warning();

        for (const key of this.PLAYABLE_ITEMS) {
            if (this[key] && this[key].disableInteractive) {
                this[key].disableInteractive();
            }
        }

        this.updateFailOverlayLayout();
        const targetScale = this.failImageTargetScale || 0.18;

        this.failOverlay.setVisible(true).setAlpha(0);
        this.failImage
            .setVisible(true)
            .setAlpha(0)
            .setAngle(-8)
            .setScale(targetScale * 0.55);

        this.tweens.add({
            targets: this.failOverlay,
            alpha: 0.88,
            duration: 250,
            ease: 'Power2'
        });

        this.tweens.add({
            targets: this.failImage,
            alpha: 1,
            angle: 0,
            scale: targetScale,
            duration: 520,
            ease: 'Back.Out',
            onComplete: () => {
                this.tweens.add({
                    targets: this.failImage,
                    scale: targetScale * 1.04,
                    duration: 650,
                    yoyo: true,
                    repeat: -1,
                    ease: 'Sine.inOut'
                });
                this.transitionToEndScene('fail', 350);
            }
        });
    }

    transitionToEndScene(result = 'end', delay = 0) {
        if (this.isGameEnding) return;

        this.isGameEnding = true;
        this.isMoving = false;
        this.isBoarding = false;
        this.hideParking4Warning();

        for (const key of this.PLAYABLE_ITEMS) {
            if (this[key] && this[key].disableInteractive) {
                this[key].disableInteractive();
            }
        }

        this.time.delayedCall(delay, () => {
            this.cameras.main.fadeOut(450, 0, 0, 0);
            this.cameras.main.once('camerafadeoutcomplete', () => {
                this.scene.start('End', { result });
            });
        });
    }

    updateFailOverlayLayout() {
        if (!this.failOverlay || !this.failImage) return;

        const width = this.scale.width;
        const height = this.scale.height;
        this.failOverlay.setPosition(0, 0).setDisplaySize(width, height);
        this.failImage.setPosition(width / 2, height / 2);

        const assetSize = Math.max(this.failImage.width || 1, this.failImage.height || 1);
        this.failImageTargetScale = (Math.min(width, height) * 0.42) / assetSize;

        if (!this.isGameFailed) {
            this.failImage.setScale(this.failImageTargetScale);
        }
    }

    /* ============================================================
       ORIENTATION & RESIZE
       ============================================================ */
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
                continue;
            }

            const isPlayableItem = this.PLAYABLE_ITEMS && this.PLAYABLE_ITEMS.includes(key);
            const item = isPlayableItem && this.itemData ? this.itemData[key] : null;

            if (item && item.isParked) {
                const parkingKey = this.getParkingKeyForPlane(key);
                const parkingLayout = parkingKey ? layout[parkingKey] : null;
                if (parkingLayout) {
                    this[key].setPosition(parkingLayout.x, parkingLayout.y);
                    this[key].setAngle(this.PARKING_ANGLES[parkingKey] || -40);
                    if (s) this[key].setScale(s);
                    if (alpha !== undefined) this[key].setAlpha(alpha);
                    if (depth !== undefined) this[key].setDepth(depth);
                    continue;
                }
            }

            if (item && (item.isMoving || item.departed)) {
                continue;
            }

            this[key].setPosition(x, y);
            if (angle !== undefined) this[key].setAngle(angle);
            else if (r !== undefined) this[key].setRotation(r);
            else if (isPlayableItem) this[key].setAngle(0);
            if (s) this[key].setScale(s);
            if (alpha !== undefined) this[key].setAlpha(alpha);
            if (depth !== undefined) this[key].setDepth(depth);

            if (isPlayableItem) {
                this.planeRestPoses[key] = {
                    x: this[key].x,
                    y: this[key].y,
                    angle: this[key].angle
                };
            }
        }

        const scale = vh / design.height;
        const scaledContentWidth = design.width * scale;
        const offsetX = (vw - scaledContentWidth) / 2;
        const offsetY = (vh - design.height * scale) / 2;

        if (this.gameUIContainer) {
            this.gameUIContainer.setScale(scale);
            this.gameUIContainer.setPosition(offsetX, offsetY);
        }

        this.updateParking4Warning();

        if (this.iqText && layout.iq_counter) {
            const meterOffsetX = this.iq_counter ? this.iq_counter.displayWidth * 0.16 : 0;
            const meterOffsetY = this.iq_counter ? -this.iq_counter.displayHeight * (-0.09) : 0;
            this.iqText.setPosition(
                ((layout.iq_counter.x / design.width) * vw) + meterOffsetX,
                ((layout.iq_counter.y / design.height) * vh) + meterOffsetY
            );
        }

        if (this.peopleLeftText && layout.counting_machine) {
            const counterOffsetY = this.counting_machine ? (this.counting_machine.displayHeight * 0.18) + 8 : 8;
            this.peopleLeftText.setPosition(
                (layout.counting_machine.x / design.width) * vw,
                ((layout.counting_machine.y / design.height) * vh) + counterOffsetY
            );
        }

        if (this.peopleQueue && this.peopleQueue.length > 0 && !this.isBoarding) {
            for (const slot of this.queueSprites) {
                if (!slot.active || slot.assignedQueueIndex < 0) continue;
                const pos = this.getQueueSlotPosition(slot.assignedQueueIndex);
                slot.sprite.setPosition(pos.x, pos.y);
                slot.sprite.setScale(this.getQueueScale());
            }
        }

        this.updateFailOverlayLayout();
    }
}
