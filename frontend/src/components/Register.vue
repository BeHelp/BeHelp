<script></script>
<template>
        <div class="registration">
            <div class="registration__image">
                <img src="../assets/Rectangle26.png" alt="Girl in a jacket">
            </div>
            <div class="registration__form">
                <div class="title">
                <h4>REGISTRATION FORM</h4>
                </div>
                <div class="registration__form-foto"></div>

                <div class="registration__form-short">
                    <input class="input" type="text" placeholder="First name" required />
                    <input class="input" type="text" placeholder="Last name" required />
                    
                    <div class="form-radio">
                        <label class="radio-label" for="status">Status:</label>
                        
                        <div class="form-radio-item">
                        <input type="radio" name="status" id="newcomer" checked="checked" />
                        <label class="container__group">Newcomer</label>
                        <span class="container__group-check"></span>
                        </div>

                        <div class="form-radio-item">
                        <input type="radio" name="status" id="volunteer" />
                        <label for="female">Volunteer</label>
                        <span class="check"></span>
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
                    
                    <div class="form-radio">
                        <label class="radio-label" for="status">Gender:</label>
                        
                        <div class="form-radio-item">
                        <input type="radio" name="gender" id="male" checked="checked" />
                        <label class="container__group">Male</label>
                        <span class="container__group-check"></span>
                        </div>

                        <div class="form-radio-item">
                        <input type="radio" name="gender" id="female" />
                        <label for="female">Female</label>
                        <span class="check"></span>
                        </div>

                        <div class="form-radio-item">
                        <input type="radio" name="gender" id="other" />
                        <label for="female">Other</label>
                        <span class="check"></span>
                        </div>

                        
                    </div>

                    <div class="registration__form-options">
                        <select class="registration__form-options-option" placeholder="Nationality">
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
                        <button class="btn">SEND</button>
                    </div>
                </div>
            </div>
        </div>

</template>

<style lang="scss" >

@import '../components/styles/layout/_register.scss';
</style>
