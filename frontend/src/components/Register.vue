<script></script>
<template>
        <div class="registration">
            <div class="registration__image">
                <img src="../assets/Rectangle26.png" alt="Girl in a jacket">
            </div>
            <div class="registration__form">
                <div class="title">
                <h5>REGISTRATION FORM</h5>
                </div>
                <div class="registration__form-foto"></div>

                <div class="registration__form-short">
                    <input class="input" type="text" placeholder="First name" required />
                    <input class="input" type="text" placeholder="Last name" required />
                    
                    <div class="form__radio">
                        <label class="form__label" for="status">Status:</label>
                        
                        <div class="form__radio-item">
                        <input type="radio" name="status" id="newcomer" checked="checked" />
                        <label class="form__radio-option" for="newcomer" >Newcomer</label>
                        <span class="form__radio-check"></span>
                        </div>

                        <div class="form__radio-item">
                        <input type="radio" name="status" id="volunteer" />
                        <label class="form__radio-option" for="volunteer">Volunteer</label>
                        <span class="form__radio-check"></span>
                        </div>
                        
                    </div>
                    <div class="registration__form-short-row">
                        <input class="input" type="text" placeholder="Post code" required />
                        <input class="input" type="text" placeholder="City" required />
                    </div>
                </div>
                <div class="registration__form-long">
                    <input class="input" type="text" placeholder="E-mail" required />
                    <input class="input" type="text" placeholder="Password" required />
                    
                    <div class="form__radio">
                        <label class="form__label" for="status">Gender:</label>
                        
                        <div class="form__radio-item">
                        <input type="radio" name="gender" id="male" checked="checked" />
                        <label class="form__radio-option" for="male">Male</label>
                        <span class="form__radio-check"></span>
                        </div>

                        <div class="form__radio-item">
                        <input type="radio" name="gender" id="female" />
                        <label class="form__radio-option" for="female">Female</label>
                        <span class="form__radio-check"></span>
                        </div>

                        <div class="form__radio-item">
                        <input type="radio" name="gender" id="other" />
                        <label class="form__radio-option" for="female">Other</label>
                        <span class="form__radio-check"></span>
                        </div>

                        
                    </div>

                    <div class="registration__form-options">
                        <select class="registration__form-options-select" placeholder="Nationality">
                            <option value="Nationality1">Nationality1</option>
                            <option value="Nationality2">Nationality2</option>
                            <option value="Nationality3">Nationality3</option>
                        </select>
                    </div>
                    <div class="registration__form-options">
                        <select  class="registration__form-options-option" placeholder="Languages">
                            <option value="english">English</option>
                            <option value="dutch">Dutch</option>
                            <option value="french">French</option>
                        </select>
                    </div>
                    <div class="registration__form-options">
                        <select class="registration__form-options-option" placeholder="Skills">
                            <option value="skill1">skill1</option>
                            <option value="skill2">skill2</option>
                            <option value="skill3">skill3</option>
                        </select>
                    </div>

                    <input class="description" type="text" placeholder="Description" required />
                    
                    <div class="registration__form-button">
                        <button class="rbtn">SEND</button>
                    </div>
                </div>
            </div>
        </div>

</template>

<style lang="scss" >
@import '../components/styles/abstract/_base.scss';
@import '../components/styles/abstract/_variables.scss';
@import '../components/styles/layout/_register.scss';
</style>
