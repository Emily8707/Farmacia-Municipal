// ============================================================
// DATOS DE EXISTENCIAS (catálogo con lotes) - con las mismas imágenes
// ============================================================
const catalogo = [
    { id: 'MED-001', nombre: 'Acarbosa', presentacion: 'Suspensión', concentracion: '200mg/5ml', categoria: 'Antidiabético', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK7kqxSHC3Idxm_B16eJP_qIoHvDhavG7pklxQlMUXgQuYBvqueIhAQFE&s=10', lotes: [{ lote: 'L0385-SUS', vence: '2027-05-26', stock: 368 }] },
    { id: 'MED-002', nombre: 'Acarbosa', presentacion: 'Inyección', concentracion: '50mg/ml', categoria: 'Antidiabético', stockMin: 100, imagen: 'https://aws.farmasmart.com/app/uploads/2024/08/7501349028661.webp', lotes: [{ lote: 'L0081-INY', vence: '2027-01-20', stock: 87 }] },
    { id: 'MED-003', nombre: 'Acarbosa', presentacion: 'Jarabe', concentracion: '100mg/5ml', categoria: 'Antidiabético', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1TRWYyChjLMg9eI9uc2_UvT6jxc7a4tFawhLuEqRchA&s=10', lotes: [{ lote: 'L0083-JAR', vence: '2026-12-05', stock: 631 }] },
    { id: 'MED-004', nombre: 'Acarbosa', presentacion: 'Cápsula', concentracion: '250mg', categoria: 'Antidiabético', stockMin: 100, imagen: 'https://grupofarmapronto.com/wp-content/uploads/2022/07/7501349028661.jpg', lotes: [{ lote: 'L0091-CAP', vence: '2027-06-10', stock: 861 }] },
    { id: 'MED-005', nombre: 'Acarbosa', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antidiabético', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyISQ1ZebEZT_oLFtlEB9Ks3kpFToJ5o129ZLhL7pqa-cfMzOKMNqF_6A&s=10', lotes: [{ lote: 'L0101-TAB', vence: '2027-08-22', stock: 296 }] },
    { id: 'MED-006', nombre: 'Acetaminofén', presentacion: 'Suspensión', concentracion: '200mg/5ml', categoria: 'Analgésico', stockMin: 50, imagen: 'https://dimedsol.com/wp-content/uploads/2024/03/ACETAMINOFEN-oral.webp', lotes: [{ lote: 'L0201-SUS', vence: '2026-11-15', stock: 277 }] },
    { id: 'MED-007', nombre: 'Acetaminofén', presentacion: 'Inyección', concentracion: '50mg/ml', categoria: 'Analgésico', stockMin: 50, imagen: 'https://farmaciasantabarbara1.com/app/media/instancia_cliente/ic32/producto/29864/FS0391.jpg', lotes: [{ lote: 'L0202-INY', vence: '2027-02-28', stock: 256 }] },
    { id: 'MED-008', nombre: 'Acetaminofén', presentacion: 'Jarabe', concentracion: '100mg/5ml', categoria: 'Analgésico', stockMin: 50, imagen: 'https://farmaciasdeoccidente.com.gt/wp-content/uploads/13567.webp', lotes: [{ lote: 'L0203-JAR', vence: '2026-10-30', stock: 162 }] },
    { id: 'MED-009', nombre: 'Acetaminofén', presentacion: 'Cápsula', concentracion: '250mg', categoria: 'Analgésico', stockMin: 100, imagen: 'https://cofarca.net/wp-content/uploads/2025/09/Gamma-6.png', lotes: [{ lote: 'L0204-CAP', vence: '2027-05-12', stock: 724 }] },
    { id: 'MED-010', nombre: 'Acetaminofén', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Analgésico', stockMin: 100, imagen: 'https://walmartgt.vtexassets.com/arquivos/ids/290758/Acetaminofen-Mk-500-Mg-X-100-Tabletas-2-32809.jpg?v=637955914860370000', lotes: [{ lote: 'L0205-TAB', vence: '2027-09-01', stock: 855 }] },
    { id: 'MED-011', nombre: 'Aciclovir', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stockMin: 50, imagen: 'https://selectpharma.com.gt/wp-content/uploads/2025/11/selectpharma-aciclovir-tabletas.webp', lotes: [{ lote: 'L0300-TAB', vence: '2027-03-10', stock: 237 }] },
    { id: 'MED-012', nombre: 'Aciclovir', presentacion: 'Suspensión', concentracion: '200mg/5ml', categoria: 'Antibiótico', stockMin: 50, imagen: 'https://imagenes.gozeri.com/productos/129164-1-1693547018.png', lotes: [{ lote: 'L0301-SUS', vence: '2027-07-15', stock: 145 }] },
    { id: 'MED-013', nombre: 'Ambroxol', presentacion: 'Jarabe', concentracion: '15mg/5ml', categoria: 'Respiratorio', stockMin: 50, imagen: 'https://static.kemikcdn.com/2025/09/SF-AMBROX-120ML-1200x1200-1.jpg', lotes: [{ lote: 'L0455-JAR', vence: '2026-08-17', stock: 320 }] },
    { id: 'MED-014', nombre: 'Ambroxol', presentacion: 'Tableta', concentracion: '30mg', categoria: 'Respiratorio', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1YzsxH3BNsLX2EmPcUROod5KZbJcRD-VuYV2-8SokA&s=10', lotes: [{ lote: 'L0456-TAB', vence: '2027-05-05', stock: 415 }] },
    { id: 'MED-015', nombre: 'Amlodipino', presentacion: 'Cápsula', concentracion: '5mg', categoria: 'Antihipertensivo', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTNm44o-DCW-f_iBfy-jkCI5z0zXqNEJ5NaBhY21rMA&s=10', lotes: [{ lote: 'L0297-CAP', vence: '2026-12-11', stock: 664 }] },
    { id: 'MED-016', nombre: 'Amlodipino', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Antihipertensivo', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvL2pBu_ecplPYLVvSQcYI1QUnAhMWaXWyBp1cOADJ_g&s=10', lotes: [{ lote: 'L0298-TAB', vence: '2027-08-08', stock: 512 }] },
    { id: 'MED-017', nombre: 'Amoxicilina', presentacion: 'Cápsula', concentracion: '500mg', categoria: 'Antibiótico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNqS7i9u8mvTUWCldStMXg9LK4EeTQvJHu_FrEt0cUdA&s=10', lotes: [{ lote: 'L0190-CAP', vence: '2027-07-05', stock: 450 }] },
    { id: 'MED-018', nombre: 'Amoxicilina', presentacion: 'Suspensión', concentracion: '250mg/5ml', categoria: 'Antibiótico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtU8xGYm_cLugA_4UVbWjF_OwmjV9j62jbM9utoj1Aw&s=10', lotes: [{ lote: 'L0191-SUS', vence: '2027-10-18', stock: 320 }] },
    { id: 'MED-019', nombre: 'Amoxicilina', presentacion: 'Jarabe', concentracion: '125mg/5ml', categoria: 'Antibiótico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHc3cNzVlnBrzmcmdvsyrIvvMjsLtS7VYFBJWC8n6y3w&s=10', lotes: [{ lote: 'L0192-JAR', vence: '2027-11-22', stock: 280 }] },
    { id: 'MED-020', nombre: 'Aspirina', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Analgésico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwL8LJ7AEC7S_tH96LnLcUqauxsGZSIlklqCIYHtKmQ&s=10', lotes: [{ lote: 'L0600-TAB', vence: '2027-06-15', stock: 890 }] },
    { id: 'MED-021', nombre: 'Aspirina', presentacion: 'Tableta', concentracion: '100mg', categoria: 'Antiinflamatorio', stockMin: 100, imagen: 'https://www.plmconnection.com/plmservices/PharmaSearchEngine/Peru/DEF/SIDEF/400x400/bayer_aspirina100_tabs100_100mg_caja.png', lotes: [{ lote: 'L0601-TAB', vence: '2027-09-20', stock: 720 }] },
    { id: 'MED-022', nombre: 'Atenolol', presentacion: 'Tableta', concentracion: '50mg', categoria: 'Antihipertensivo', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsKyhgOx-Zyryf245s-_300jh-u9BeXVUSQqNL-Gphw&s=10', lotes: [{ lote: 'L0610-TAB', vence: '2027-07-12', stock: 480 }] },
    { id: 'MED-023', nombre: 'Azitromicina', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCwruMrxyaskcBc8kowipaAYEkgiSKjnq-vky8mLItQ&s=10', lotes: [{ lote: 'L0620-TAB', vence: '2027-04-25', stock: 385 }] },
    { id: 'MED-024', nombre: 'Azitromicina', presentacion: 'Suspensión', concentracion: '200mg/5ml', categoria: 'Antibiótico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdgbeMlBWbCAJa_0ncaVKhulY6dlKeQ9hXzcaqHLTmJQ&s=10', lotes: [{ lote: 'L0621-SUS', vence: '2027-08-30', stock: 210 }] },
    { id: 'MED-025', nombre: 'Bismuto', presentacion: 'Suspensión', concentracion: '200mg/5ml', categoria: 'Gastrointestinal', stockMin: 50, imagen: 'https://production-media.fahorro.com/media/catalog/product/7/5/7502276850738_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=144&width=144&canvas=144:144', lotes: [{ lote: 'L0465-SUS', vence: '2027-12-09', stock: 388 }] },
    { id: 'MED-026', nombre: 'Bromhexina', presentacion: 'Jarabe', concentracion: '4mg/5ml', categoria: 'Respiratorio', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjGKjpiVOt5gNk6kmLiJqExzTb_xboowXuoOYKPuviA&s=10', lotes: [{ lote: 'L0521-TAB', vence: '2026-11-26', stock: 583 }] },
    { id: 'MED-027', nombre: 'Bromhexina', presentacion: 'Tableta', concentracion: '8mg', categoria: 'Respiratorio', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjF5QdMlB-vOzMatrnCL3FoortCHkAWU10yY25_akQg&s=10', lotes: [{ lote: 'L0522-TAB', vence: '2027-06-18', stock: 425 }] },
    { id: 'MED-028', nombre: 'Budesonida', presentacion: 'Inhalador', concentracion: '200mcg', categoria: 'Respiratorio', stockMin: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPVvN7zX4i9NERf8aGWH7_1L7MfM7JlcdNtwZMJlNzpg&s', lotes: [{ lote: 'L0630-INH', vence: '2027-09-10', stock: 165 }] },
    { id: 'MED-029', nombre: 'Captopril', presentacion: 'Tableta', concentracion: '25mg', categoria: 'Antihipertensivo', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsRjIL-0-XYy4TuBJh-t1k8a0E_VwFF02UrVxUkOHCg&s=10', lotes: [{ lote: 'L0640-TAB', vence: '2027-05-22', stock: 620 }] },
    { id: 'MED-030', nombre: 'Carvedilol', presentacion: 'Tableta', concentracion: '12.5mg', categoria: 'Antihipertensivo', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3QjCs_vl_v0GbqgtTN3UZeIrd3ARd2dAv5US9Z4xuBg&s=10', lotes: [{ lote: 'L0331-TAB', vence: '2026-10-22', stock: 288 }] },
    { id: 'MED-031', nombre: 'Cefalexina', presentacion: 'Cápsula', concentracion: '500mg', categoria: 'Antibiótico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbJbLZ4qxqKFPNK1p70lf4HXAlVSycPTZp-nz6-urx3w&s=10', lotes: [{ lote: 'L0650-CAP', vence: '2027-07-30', stock: 390 }] },
    { id: 'MED-032', nombre: 'Cefalexina', presentacion: 'Suspensión', concentracion: '250mg/5ml', categoria: 'Antibiótico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6bwLSHBOUpaWl3hAUz2fE1juqIAUZSuccr1mWJB1-Mg&s=10', lotes: [{ lote: 'L0651-SUS', vence: '2027-10-10', stock: 280 }] },
    { id: 'MED-033', nombre: 'Celecoxib', presentacion: 'Jarabe', concentracion: '100mg/5ml', categoria: 'Antiinflamatorio', stockMin: 50, imagen: 'https://distribuidorasanantonio.com/wp-content/uploads/2023/08/7502216805361-300x300.webp', lotes: [{ lote: 'L0108-JAR', vence: '2026-12-13', stock: 383 }] },
    { id: 'MED-034', nombre: 'Celecoxib', presentacion: 'Cápsula', concentracion: '200mg', categoria: 'Antiinflamatorio', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyERMQ0oL1M2TS4DjfwX91SmCSbnO34-t_VsHJTr7eQ&s=10', lotes: [{ lote: 'L0109-CAP', vence: '2027-08-25', stock: 245 }] },
    { id: 'MED-035', nombre: 'Cetirizina', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Antiinflamatorio', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3-jpS203OgpD2VIS4keoRraTvGZ9C6B1AqQulN5pHxg&s=10', lotes: [{ lote: 'L0501-TAB', vence: '2026-12-20', stock: 35 }] },
    { id: 'MED-036', nombre: 'Cetirizina', presentacion: 'Jarabe', concentracion: '5mg/5ml', categoria: 'Antiinflamatorio', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr0L2iVT_HKV8z-Knit3NF5qJTuFBwPAhajSohISQElQ&s=10', lotes: [{ lote: 'L0502-JAR', vence: '2027-05-14', stock: 420 }] },
    { id: 'MED-037', nombre: 'Ciprofloxacino', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkRCNHAU8zkylPMSbc7GeiZ1K9jROOZOPgHyAY4tEHxw&s=10', lotes: [{ lote: 'L0660-TAB', vence: '2027-06-28', stock: 510 }] },
    { id: 'MED-038', nombre: 'Ciprofloxacino', presentacion: 'Inyección', concentracion: '200mg/100ml', categoria: 'Antibiótico', stockMin: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUf-3dbZEkphplkY4gaaPWkIo8h8wnpOhvdXQCXuRilg&s=10', lotes: [{ lote: 'L0661-INY', vence: '2027-04-18', stock: 125 }] },
    { id: 'MED-039', nombre: 'Claritromicina', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stockMin: 80, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ljQ5eqM61K9zetQAm_SSAeSsB6N0cZig_y1UBT2I4w&s=10', lotes: [{ lote: 'L0161-TAB', vence: '2026-11-06', stock: 705 }] },
    { id: 'MED-040', nombre: 'Claritromicina', presentacion: 'Suspensión', concentracion: '250mg/5ml', categoria: 'Antibiótico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkVS3O3-v6a5_KreO3oIbr4OPgMv7NNRDL7CG0nWZmw&s=10', lotes: [{ lote: 'L0162-SUS', vence: '2027-09-15', stock: 415 }] },
    { id: 'MED-041', nombre: 'Cloranfenicol', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnM3cNeckjEf6A-HTJM4ZlG47CazL0cb8mSSMIi4sJ6Q&s=10', lotes: [{ lote: 'L0241-TAB', vence: '2026-11-19', stock: 347 }] },
    { id: 'MED-042', nombre: 'Cloranfenicol', presentacion: 'Cápsula', concentracion: '250mg', categoria: 'Antibiótico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6CtYUQRJEMKxidVLvEAyrKX4nU_o39YysrY9L2t12ug&s=10', lotes: [{ lote: 'L0242-CAP', vence: '2027-07-08', stock: 265 }] },
    { id: 'MED-043', nombre: 'Clonazepam', presentacion: 'Tableta', concentracion: '2mg', categoria: 'Analgésico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTByGpf9NyyD7N_LFdRm7TFjFy30ie4b9WDFh-HHWjWA&s=10', lotes: [{ lote: 'L0670-TAB', vence: '2027-08-20', stock: 195 }] },
    { id: 'MED-044', nombre: 'Dexametasona', presentacion: 'Inyección', concentracion: '4mg/ml', categoria: 'Antiinflamatorio', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLQc9rQGNnncKy27ENkgZP7tO_sB7EjXvijqUj2zWoiA&s=10', lotes: [{ lote: 'L0680-INY', vence: '2027-06-05', stock: 340 }] },
    { id: 'MED-045', nombre: 'Dexametasona', presentacion: 'Tableta', concentracion: '4mg', categoria: 'Antiinflamatorio', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQaL42u9gXAYuTEyr64RzxynOEFmIJqwCs7HN5Q7olw&s=10', lotes: [{ lote: 'L0681-TAB', vence: '2027-09-28', stock: 480 }] },
    { id: 'MED-046', nombre: 'Diclofenaco', presentacion: 'Tableta', concentracion: '50mg', categoria: 'Antiinflamatorio', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFAzn4i60iykSzFbRTPSklvr4whvwxLSlOWX3hY39XdQ&s=10', lotes: [{ lote: 'L0690-TAB', vence: '2027-05-15', stock: 890 }] },
    { id: 'MED-047', nombre: 'Diclofenaco', presentacion: 'Gel', concentracion: '1%', categoria: 'Antiinflamatorio', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK5Pe1FV-t94qCVhMVcu0pxJYJca5keAisOXaELg7goA&s=10', lotes: [{ lote: 'L0691-GEL', vence: '2027-11-20', stock: 320 }] },
    { id: 'MED-048', nombre: 'Diclofenaco', presentacion: 'Inyección', concentracion: '75mg/3ml', categoria: 'Antiinflamatorio', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BnBHHvnFXRSiHRlwzAiFDi3KanzUH3RtsiOErRKQ-w&s=10', lotes: [{ lote: 'L0692-INY', vence: '2027-07-15', stock: 210 }] },
    { id: 'MED-049', nombre: 'Enalapril', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Antihipertensivo', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYVDlr32LnY6tdgA8EPJmW2u6hYTEz87cabIOv4idRg&s=10', lotes: [{ lote: 'L0700-TAB', vence: '2027-06-20', stock: 545 }] },
    { id: 'MED-050', nombre: 'Esomeprazol', presentacion: 'Tableta', concentracion: '40mg', categoria: 'Gastrointestinal', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHh2WTbdp1DCi2n-W4WaUWg2nDGdz8o-VkMl6XGdyq_w&s=10', lotes: [{ lote: 'L0421-TAB', vence: '2026-12-05', stock: 143 }] },
    { id: 'MED-051', nombre: 'Famotidina', presentacion: 'Suspensión', concentracion: '40mg/5ml', categoria: 'Gastrointestinal', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYuw2K5AAUco1rG-Jmoaw1QY20fdu9fwJyhzTzFNjODg&s=10', lotes: [{ lote: 'L0440-SUS', vence: '2026-12-07', stock: 315 }] },
    { id: 'MED-052', nombre: 'Famotidina', presentacion: 'Tableta', concentracion: '20mg', categoria: 'Gastrointestinal', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFCso4iF_JjxHjwhOx-ARy8wS4hGy9YgIBjKejqAtWQ&s=10', lotes: [{ lote: 'L0441-TAB', vence: '2027-08-10', stock: 420 }] },
    { id: 'MED-053', nombre: 'Fluconazol', presentacion: 'Suspensión', concentracion: '50mg/5ml', categoria: 'Antibiótico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbb8irTnBoczPz40jXs7jr5YWgLGKEymIx2IpgqsYcfA&s=10', lotes: [{ lote: 'L0255-SUS', vence: '2026-12-18', stock: 445 }] },
    { id: 'MED-054', nombre: 'Fluconazol', presentacion: 'Cápsula', concentracion: '150mg', categoria: 'Antibiótico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR03WA2NnQT9KcmEIkLKwqaNdA9viXdsMKScpsL5pbYbA&s=10', lotes: [{ lote: 'L0256-CAP', vence: '2027-09-10', stock: 280 }] },
    { id: 'MED-055', nombre: 'Furosemida', presentacion: 'Tableta', concentracion: '40mg', categoria: 'Antihipertensivo', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkVvL_zwVLo93pthUb48fEiV6C4i8E_pDJ_Nq0_h7tGg&s=10', lotes: [{ lote: 'L0710-TAB', vence: '2027-07-25', stock: 490 }] },
    { id: 'MED-056', nombre: 'Gentamicina', presentacion: 'Inyección', concentracion: '80mg/2ml', categoria: 'Antibiótico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP1BUixE0k2GmjxnsbH0hR7DVJ1E1TpudrEF7yh3Lf2g&s=10', lotes: [{ lote: 'L0720-INY', vence: '2027-06-30', stock: 195 }] },
    { id: 'MED-057', nombre: 'Glibenclamida', presentacion: 'Tableta', concentracion: '5mg', categoria: 'Antidiabético', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4Hm00_JBbIxfdwqsWv4mFsni3khUcRTprATOrF2ICg&s=10', lotes: [{ lote: 'L0730-TAB', vence: '2027-08-15', stock: 620 }] },
    { id: 'MED-058', nombre: 'Hidroclorotiazida', presentacion: 'Tableta', concentracion: '25mg', categoria: 'Antihipertensivo', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0-91W-i2zDN8AQUjar35xe-TLqwAYjxtrAsjnEhdQA&s=10', lotes: [{ lote: 'L0740-TAB', vence: '2027-05-20', stock: 715 }] },
    { id: 'MED-059', nombre: 'Ibuprofeno', presentacion: 'Tableta', concentracion: '400mg', categoria: 'Antiinflamatorio', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiDHn6KZ5zvVzJjNQlpzfUth2Lx1bsRGRzrsUks3Mmw&s=10', lotes: [{ lote: 'LIBU-2024-005', vence: '2027-06-18', stock: 780 }] },
    { id: 'MED-060', nombre: 'Ibuprofeno', presentacion: 'Suspensión', concentracion: '100mg/5ml', categoria: 'Antiinflamatorio', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxAAiA5ZPqXXWgrtBA4QY1euSW6FtBSC6IngESmBLVg&s=10', lotes: [{ lote: 'L0751-SUS', vence: '2027-10-12', stock: 415 }] },
    { id: 'MED-061', nombre: 'Ibuprofeno', presentacion: 'Cápsula', concentracion: '600mg', categoria: 'Antiinflamatorio', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOVVTYFgsR3OBULqeJ3t1pJFXFY-IAeHBTPBG9CTqeMg&s=10', lotes: [{ lote: 'L0752-CAP', vence: '2027-09-05', stock: 350 }] },
    { id: 'MED-062', nombre: 'Ketamina', presentacion: 'Cápsula', concentracion: '50mg', categoria: 'Analgésico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3-rr2pI965ZZpA1oz5RSRT_smlG2tC2QuuszeTXud8Q&s=10', lotes: [{ lote: 'L0047-CÁP', vence: '2026-12-13', stock: 458 }] },
    { id: 'MED-063', nombre: 'Ketorolaco', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Analgésico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLbCAXeezx7wixgSR0ZGx0R6sEi4vtxoIghV-chVWFsg&s=10', lotes: [{ lote: 'L0760-TAB', vence: '2027-07-20', stock: 385 }] },
    { id: 'MED-064', nombre: 'Ketorolaco', presentacion: 'Inyección', concentracion: '30mg/ml', categoria: 'Analgésico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKuUenoFZs8V_n1Q2vq53JSg7WeHvbDT14W55wUx7l6g&s=10', lotes: [{ lote: 'L0761-INY', vence: '2027-05-28', stock: 175 }] },
    { id: 'MED-065', nombre: 'Levofloxacino', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgh6Bt_uL_AtQ67Dox0akteGPlDwlbJYjkjSXfpisRSQ&s=10', lotes: [{ lote: 'L0146-TAB', vence: '2026-12-17', stock: 74 }] },
    { id: 'MED-066', nombre: 'Lidocaína', presentacion: 'Inyección', concentracion: '2%', categoria: 'Analgésico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Uw_SbuAtPPkJZbIUH2akOPsmJLqE2aeVONXSQZtJCQ&s=10', lotes: [{ lote: 'L0770-INY', vence: '2027-08-10', stock: 240 }] },
    { id: 'MED-067', nombre: 'Lisinopril', presentacion: 'Cápsula', concentracion: '10mg', categoria: 'Antihipertensivo', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh2kpVdtrs_n8Mi7aDAhBj6YqvQujb3bnXFdAfHyA3QQ&s=10', lotes: [{ lote: 'L0287-CÁP', vence: '2026-12-08', stock: 700 }] },
    { id: 'MED-068', nombre: 'Lisinopril', presentacion: 'Tableta', concentracion: '20mg', categoria: 'Antihipertensivo', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAsYjLwe-ZE7-xHL6T6Igt5Z4lFcxFLtXdQ9dmi2rzww&s=10', lotes: [{ lote: 'L0288-TAB', vence: '2027-09-15', stock: 520 }] },
    { id: 'MED-069', nombre: 'Loratadina', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Antiinflamatorio', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2PerkrHLMTBvLe5Kl1kqvquVWaCV10vEpMgQleQ8ww&s=10', lotes: [{ lote: 'L0780-TAB', vence: '2027-06-25', stock: 680 }] },
    { id: 'MED-070', nombre: 'Loratadina', presentacion: 'Jarabe', concentracion: '5mg/5ml', categoria: 'Antiinflamatorio', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScA6T-gmtNEvxkXfPYXYcNU0NcT5Y9clbugVdtuE6bGw&s=10', lotes: [{ lote: 'L0781-JAR', vence: '2027-10-30', stock: 340 }] },
    { id: 'MED-071', nombre: 'Losartán', presentacion: 'Tableta', concentracion: '50mg', categoria: 'Antihipertensivo', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0DRWp9stl8J5C9I0_8ELXWwTfN3ccHXUb2pfm6559uQ&s=10', lotes: [{ lote: 'L0510-TAB', vence: '2027-08-15', stock: 415 }] },
    { id: 'MED-072', nombre: 'Metformina', presentacion: 'Tableta', concentracion: '850mg', categoria: 'Antidiabético', stockMin: 100, imagen: 'https://www.enviatabsaexpress.com/_uploads/productos/full/Metfomina%20850_30%20caps-328.jpg', lotes: [{ lote: 'L0520-TAB', vence: '2027-09-20', stock: 680 }] },
    { id: 'MED-073', nombre: 'Metformina', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antidiabético', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Mp1WLBeGxQW5F8LM-Hpvd4RGLE2DYfzMzGWD_2kI2g&s=10', lotes: [{ lote: 'L0521-TAB', vence: '2027-10-25', stock: 820 }] },
    { id: 'MED-074', nombre: 'Metronidazol', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJD9rWj6XZ3qerzhGPxXJEzsWu3JwrerIjuvWrCDSIA&s=10', lotes: [{ lote: 'L0790-TAB', vence: '2027-06-15', stock: 560 }] },
    { id: 'MED-075', nombre: 'Metronidazol', presentacion: 'Suspensión', concentracion: '250mg/5ml', categoria: 'Antibiótico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXc7zIV5MUROJwokhByL9EFoR42VggAC-9fMvqAbbomA&s=10', lotes: [{ lote: 'L0791-SUS', vence: '2027-09-25', stock: 325 }] },
    { id: 'MED-076', nombre: 'Montelukast', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Respiratorio', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnoTeezXI62yBvZW-dhIybg1m3pPOkeMyY42SiACd8A&s=10', lotes: [{ lote: 'L0531-TAB', vence: '2026-10-15', stock: 644 }] },
    { id: 'MED-077', nombre: 'Montelukast', presentacion: 'Tableta', concentracion: '5mg', categoria: 'Respiratorio', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapFwOth3ro4wRtC2Pnv9paeLXDdQK_6IhHKAFSwuHsA&s=10', lotes: [{ lote: 'L0532-TAB', vence: '2027-08-20', stock: 420 }] },
    { id: 'MED-078', nombre: 'Morfina', presentacion: 'Inyección', concentracion: '10mg/ml', categoria: 'Analgésico', stockMin: 20, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG9TUaDwOG7f8kk2UAzm9-AJzqEYJkNzxWMYRSGUzMWQ&s=10', lotes: [{ lote: 'L0041-TAB', vence: '2026-11-13', stock: 799 }] },
    { id: 'MED-079', nombre: 'Morfina', presentacion: 'Tableta', concentracion: '30mg', categoria: 'Analgésico', stockMin: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMC8Ue-m8pGpJDpf6JDqhtT9ikJlrvSCKMdtiTT0rN3w&s=10', lotes: [{ lote: 'L0042-TAB', vence: '2027-07-18', stock: 340 }] },
    { id: 'MED-080', nombre: 'Naproxeno', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Analgésico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODzkDcJUJzEwL0leL5RIXyhKmULNHTVttWAocNx_TiQ&s=10', lotes: [{ lote: 'L0071-TAB', vence: '2026-10-10', stock: 363 }] },
    { id: 'MED-081', nombre: 'Naproxeno', presentacion: 'Suspensión', concentracion: '125mg/5ml', categoria: 'Analgésico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhJgVi-NmcHgW939fncsaHcljtKAYXZDkpCkEYvMoaDg&s=10', lotes: [{ lote: 'L0072-SUS', vence: '2026-12-15', stock: 198 }] },
    { id: 'MED-082', nombre: 'Nifedipino', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Antihipertensivo', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9HjJz3Do6rotA9B0OND6Zkd77M6AoL4VwMzlhluTyQ&s=10', lotes: [{ lote: 'L0301-TAB', vence: '2026-12-02', stock: 689 }] },
    { id: 'MED-083', nombre: 'Nifedipino', presentacion: 'Cápsula', concentracion: '30mg', categoria: 'Antihipertensivo', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOoQK0P7ziDZReioL7ts7SCqCSMMKqh1rNcXs2Vp28vQ&s', lotes: [{ lote: 'L0302-CAP', vence: '2027-08-25', stock: 380 }] },
    { id: 'MED-084', nombre: 'Omeprazol', presentacion: 'Cápsula', concentracion: '20mg', categoria: 'Gastrointestinal', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWIKHhz1fgcJduFjcLDIovWlzLvrxpa0JCAENZ5IbYBg&s=10', lotes: [{ lote: 'L0500-CAP', vence: '2027-07-10', stock: 520 }] },
    { id: 'MED-085', nombre: 'Omeprazol', presentacion: 'Cápsula', concentracion: '40mg', categoria: 'Gastrointestinal', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULU1QkRyRl-yQSwtIvEqZcqezvXjSzYVvhiE6V_8kgw&s=10', lotes: [{ lote: 'L0501-CAP', vence: '2027-09-30', stock: 380 }] },
    { id: 'MED-086', nombre: 'Ondansetrón', presentacion: 'Jarabe', concentracion: '4mg/5ml', categoria: 'Gastrointestinal', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRME0F4JVa-DqpJOazHMWWMKjghpkIbPas-5wv9SXNVXw&s=10', lotes: [{ lote: 'L0453-JAR', vence: '2026-12-20', stock: 424 }] },
    { id: 'MED-087', nombre: 'Ondansetrón', presentacion: 'Tableta', concentracion: '8mg', categoria: 'Gastrointestinal', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6b960W1HFWXlabMujsZSFy1N9uV9rSQ-5_sst22Fwsw&s=10', lotes: [{ lote: 'L0454-TAB', vence: '2027-08-15', stock: 265 }] },
    { id: 'MED-088', nombre: 'Paracetamol', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Analgésico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvyTLDYzWwEAZi3iD_SvpaKlPebLu6uR3OHjvgU8BEaQ&s=10', lotes: [{ lote: 'LPAR-2024-001', vence: '2027-06-05', stock: 920 }] },
    { id: 'MED-089', nombre: 'Paracetamol', presentacion: 'Suspensión', concentracion: '120mg/5ml', categoria: 'Analgésico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReeVkkT54_QOkpl86Ww4A2o98RCjs-obJb6UrFwtWk0A&s=10', lotes: [{ lote: 'LPAR-2024-002', vence: '2027-09-12', stock: 480 }] },
    { id: 'MED-090', nombre: 'Penicilina', presentacion: 'Inyección', concentracion: '1,000,000 UI', categoria: 'Antibiótico', stockMin: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkZCbqhm3mXg41ZfFzXdgCRIuyp-NbP24EOpwHaUJTw&s=10', lotes: [{ lote: 'L0800-INY', vence: '2027-05-20', stock: 155 }] },
    { id: 'MED-091', nombre: 'Prednisona', presentacion: 'Tableta', concentracion: '20mg', categoria: 'Antiinflamatorio', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXRrmAmm9UN0iijJ12t1-MRVfslMkFO8z7ECd0tkbKA&s=10', lotes: [{ lote: 'L0810-TAB', vence: '2027-07-15', stock: 460 }] },
    { id: 'MED-092', nombre: 'Ranitidina', presentacion: 'Tableta', concentracion: '150mg', categoria: 'Gastrointestinal', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13kAbtrvEfLhdJiDInKORWnNcX0jvaaxEUC4jAUilMA&s=10', lotes: [{ lote: 'L0820-TAB', vence: '2027-06-25', stock: 520 }] },
    { id: 'MED-093', nombre: 'Salbutamol', presentacion: 'Inhalador', concentracion: '100mcg', categoria: 'Respiratorio', stockMin: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSKEOtiZJbHdFejnegGpeLGFpzGTrUuN7zSc1puY4mjg&s=10', lotes: [{ lote: 'L0830-INH', vence: '2027-08-20', stock: 280 }] },
    { id: 'MED-094', nombre: 'Salbutamol', presentacion: 'Jarabe', concentracion: '2mg/5ml', categoria: 'Respiratorio', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8V5lzojE8s-qj2JP7wmdOEZf4DZJKaoAcOYlb49a-Q&s=10', lotes: [{ lote: 'L0831-JAR', vence: '2027-10-05', stock: 210 }] },
    { id: 'MED-095', nombre: 'Sulfametoxazol', presentacion: 'Tableta', concentracion: '800/160mg', categoria: 'Antibiótico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbhJKKLjnS9x3a8MZsKtZ8QSifoekl_RIch8PHV8DT2Q&s', lotes: [{ lote: 'L0840-TAB', vence: '2027-07-08', stock: 340 }] },
    { id: 'MED-096', nombre: 'Tetraclicina', presentacion: 'Cápsula', concentracion: '250mg', categoria: 'Antibiótico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8UOxGDAy74_wQp27g85OyMRDo5s7gXLa1y3OMtEvmJQ&s=10', lotes: [{ lote: 'L0178-CAP', vence: '2027-04-15', stock: 267 }] },
    { id: 'MED-097', nombre: 'Tetraclicina', presentacion: 'Jarabe', concentracion: '100mg/5ml', categoria: 'Antibiótico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRV5x-wTCFz17dnN1AxsbBg9qry4ETpQ9s2TYTnta-oA&s=10', lotes: [{ lote: 'L0179-JAR', vence: '2027-08-20', stock: 690 }] },
    { id: 'MED-098', nombre: 'Tetraclicina', presentacion: 'Inyección', concentracion: '50mg/ml', categoria: 'Antibiótico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_DJ1oT8z-9qQTqRdvmCL2wyS8c0ACIccl_0FE_qtUyg&s=10', lotes: [{ lote: 'L0179-INY', vence: '2027-06-14', stock: 703 }] },
    { id: 'MED-099', nombre: 'Tetraclicina', presentacion: 'Suspensión', concentracion: '200mg/5ml', categoria: 'Antibiótico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUg-wBOBtvvzJgr2I-pUIZwRT2GZLqv-wSzNxFYcmZyA&s=10', lotes: [{ lote: 'L0180-SUS', vence: '2027-09-30', stock: 921 }] },
    { id: 'MED-100', nombre: 'Tetraclicina', presentacion: 'Tableta', concentracion: '500mg', categoria: 'Antibiótico', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADGp_plt2DvDKf5JZYXIv7pvwV0qSue-pePb1MOVr-A&s=10', lotes: [{ lote: 'L0181-TAB', vence: '2027-11-12', stock: 256 }] },
    { id: 'MED-101', nombre: 'Valsartán', presentacion: 'Suspensión', concentracion: '80mg/5ml', categoria: 'Antihipertensivo', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsaQlQYGnK3F8IIDhuuPwbnoe4IsT4OWKzStVRno90iA&s=10', lotes: [{ lote: 'L0270-SUS', vence: '2026-12-21', stock: 859 }] },
    { id: 'MED-102', nombre: 'Valsartán', presentacion: 'Tableta', concentracion: '160mg', categoria: 'Antihipertensivo', stockMin: 100, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjRhIHrFVT-2X9vezE8qqozhDXUyANFpe9tf4YFF5Lyg&s=10', lotes: [{ lote: 'L0271-TAB', vence: '2027-08-30', stock: 620 }] },
    { id: 'MED-103', nombre: 'Warfarina', presentacion: 'Tableta', concentracion: '5mg', categoria: 'Antihipertensivo', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsTtY3kDHUuNYA4mAYZqW7So4mnDBugBOr265CMYeIw&s=10', lotes: [{ lote: 'L0850-TAB', vence: '2027-07-12', stock: 280 }] },
    { id: 'MED-104', nombre: 'Zolpidem', presentacion: 'Tableta', concentracion: '10mg', categoria: 'Analgésico', stockMin: 50, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBriKtZAqsbgll779juoZ8OqqC9i9GQnorYWaqWHuKOg&s=10', lotes: [{ lote: 'L0860-TAB', vence: '2027-09-18', stock: 195 }] }
];

// ============================================================
// FUNCIÓN: Imagen del medicamento
// ============================================================
function getImagenMedicamento(m) {
    return m.imagen || 'img/escudo.png';
}

let medicamentoSeleccionado = null;

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const buscador = document.getElementById('buscador');
    if (!buscador) return;
    renderLista();
    buscador.addEventListener('input', (e) => renderLista(e.target.value));
});

// ============================================================
// RENDERIZAR LISTA
// ============================================================
function renderLista(filtro = '') {
    const contenedor = document.getElementById('listaMedicamentos');
    contenedor.innerHTML = '';
    const texto = filtro.toLowerCase().trim();
    const filtrados = catalogo.filter(m =>
        m.nombre.toLowerCase().includes(texto) ||
        m.presentacion.toLowerCase().includes(texto) ||
        m.concentracion.toLowerCase().includes(texto) ||
        m.categoria.toLowerCase().includes(texto)
    );

    if (filtrados.length === 0) {
        contenedor.innerHTML = `<div style="text-align:center; padding:30px; color:#9ca3af; font-size:13px;">No se encontraron medicamentos.</div>`;
        return;
    }

    filtrados.forEach(m => {
        const stockTotal = m.lotes.reduce((s, l) => s + l.stock, 0);
        let estado = 'disponible', textoEstado = 'Disponible';
        if (stockTotal === 0) { estado = 'agotado'; textoEstado = 'Agotado'; }
        else if (stockTotal <= m.stockMin) { estado = 'stock-bajo'; textoEstado = 'Stock bajo'; }

        const activo = medicamentoSeleccionado && medicamentoSeleccionado.id === m.id ? 'active' : '';
        const card = document.createElement('div');
        card.className = `item-medicamento ${activo}`;
        card.innerHTML = `
            <img src="${getImagenMedicamento(m)}" alt="${m.presentacion}" onerror="this.src='img/escudo.png'">
            <div class="item-info">
                <div class="item-nombre">${m.nombre}</div>
                <div class="item-presentacion">${m.presentacion} · ${m.concentracion}</div>
                <div class="item-estado-row">
                    <span class="badge-status ${estado}">${textoEstado}</span>
                    <span class="item-stock">${stockTotal} unidades</span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => seleccionarMedicamento(m.id));
        contenedor.appendChild(card);
    });
}

// ============================================================
// SELECCIONAR MEDICAMENTO
// ============================================================
function seleccionarMedicamento(id) {
    medicamentoSeleccionado = catalogo.find(m => m.id === id);
    if (!medicamentoSeleccionado) return;
    renderLista(document.getElementById('buscador').value);
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('detalleContent').style.display = 'block';

    const m = medicamentoSeleccionado;
    const stockTotal = m.lotes.reduce((s, l) => s + l.stock, 0);
    document.getElementById('detalleImg').src = getImagenMedicamento(m);
    document.getElementById('detalleImg').onerror = function() { this.src = 'img/escudo.png'; };
    document.getElementById('detalleNombre').textContent = m.nombre;
    document.getElementById('detalleCategoria').textContent = m.categoria;
    document.getElementById('detallePresentacion').textContent = m.presentacion;
    document.getElementById('detalleConcentracion').textContent = m.concentracion;
    document.getElementById('detalleStockTotal').textContent = stockTotal;

    const estadoBadge = document.getElementById('detalleEstado');
    if (stockTotal === 0) { estadoBadge.className = 'badge-status agotado'; estadoBadge.textContent = 'Agotado'; }
    else if (stockTotal <= m.stockMin) { estadoBadge.className = 'badge-status stock-bajo'; estadoBadge.textContent = 'Stock bajo'; }
    else { estadoBadge.className = 'badge-status disponible'; estadoBadge.textContent = 'Disponible'; }

    const tbody = document.getElementById('tablaLotes');
    tbody.innerHTML = '';
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);

    m.lotes.forEach(lote => {
        const fechaVence = new Date(lote.vence);
        const diasRestantes = Math.ceil((fechaVence - hoy) / (1000 * 60 * 60 * 24));
        const fechaStr = fechaVence.toLocaleDateString('es-GT');
        let badgeClase = 'vigente', badgeTexto = 'Vigente';
        if (diasRestantes < 0) { badgeClase = 'vencido'; badgeTexto = 'Vencido'; }
        else if (diasRestantes <= 90) { badgeClase = 'por-vencer'; badgeTexto = 'Por vencer'; }
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${lote.lote}</td><td>${fechaStr}</td><td>${diasRestantes}</td><td>${lote.stock}</td><td><span class="badge-status ${badgeClase}">${badgeTexto}</span></td>`;
        tbody.appendChild(tr);
    });
}